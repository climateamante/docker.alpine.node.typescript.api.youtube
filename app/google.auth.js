const path = require('path')
const fs = require('fs')
const readline = require('readline')
const { google } = require( 'googleapis' )
const OAuth2 = google.auth.OAuth2
const opn = require('opn')
const keys = require('./youtube.api.client.json')
const youtube = google.youtube('v3')

const oauth2Client = new OAuth2(
	keys.installed.client_id,
	keys.installed.client_secret,
	keys.installed.redirect_uris[0]
)

/*  -- three different ways to get the current working directory -- */
//const current_dir = process.argv[1]
//const current_dir = process.cwd()
//console.log( path.resolve(__dirname) )

const TOKEN_DIR = process.cwd() + '/'
const TOKEN_FILE = 'youtube.api.token.json'
const TOKEN_PATH = TOKEN_DIR + TOKEN_FILE

function getNewToken(oauth2Client, requestData, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client, requestData);
    });
  });
}

function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

function removeEmptyParameters(params) {
  for (var p in params) {
    if (!params[p] || params[p] == 'undefined') {
      delete params[p];
    }
  }
  return params;
}


function createResource(properties) {
  var resource = {};
  var normalizedProps = properties;
  for (var p in properties) {
    var value = properties[p];
    if (p && p.substr(-2, 2) == '[]') {
      var adjustedName = p.replace('[]', '');
      if (value) {
        normalizedProps[adjustedName] = value.split(',');
      }
      delete normalizedProps[p];
    }
  }
  for (var p in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
      var propArray = p.split('.');
      var ref = resource;
      for (var pa = 0; pa < propArray.length; pa++) {
        var key = propArray[pa];
        if (pa == propArray.length - 1) {
          ref[key] = normalizedProps[p];
        } else {
          ref = ref[key] = ref[key] || {};
        }
      }
    };
  }
  return resource;
}


function subscriptionsListMySubscriptions(auth, requestData) {
  const service = google.youtube('v3');
  const parameters = removeEmptyParameters(requestData['params']);
  parameters['auth'] = auth;
  service.subscriptions.list(parameters, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    	//console.log(response);
		console.log(
			response.data.items
		)

  });
}


function authorize(credentials, requestData, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = google.auth.OAuth2
  var oauth2client = new OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, requestData, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client, requestData);
    }
  });
}

fs.readFile(
	path.resolve(__dirname, 'youtube.api.client.json'),
	function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }

authorize(
	JSON.parse(content),
	{
		'params': {
			'mine': 'true',
            'part': 'snippet,contentDetails'
			}
	},
		subscriptionsListMySubscriptions
	);

})
