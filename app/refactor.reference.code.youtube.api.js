const {OAuth2Client} = require('google-auth-library')
const { google } = require('googleapis')
const http = require('http')
const https = require('https')
const url = require('url')
const querystring = require('querystring')
const opn = require('opn')
const fs= require('fs')
 
// Download your OAuth2 configuration from the Google
//const keys = require('./youtube.api.key.json');
const key = require('./youtube.json')
const keys = require('./youtube.api.keys.json')












// 
// function auth( credentials, requestData, callback ){
// 	const google_client = new googleAuth()
// 	const oauth2_client = new google_client.OAuth2(
// 		key.client_id,
// 		key.private_key,
// 		'localhost'
// 	)
// 	
// 	oauth2_client.credentials = JSON.parse( token )
// 	callback( oauth2_client, requestData )
// }
// 
// 
// function fetch_token( oauth2_client, requestData, callback ){
// 	const auth_url = oauth2_client.generateAuthUrl({
// 		access_type: 'offline',
// 		scope: 'https://www.googleapis.com/auth/youtube' 
// 	})
// 	
// 	console.log('Google Token Verification URL: ' auth_url )
// 	
// 	const rl = readline.createInterface({
// 		input: process.stdin,
// 		output: process.stdout
// 	})
// 	
// 	rl.question('Enter The Token Verifcation Code:', (code) => {
// 		rl.close();
// 		oauth2_client.getToken(code, (err, token) => {
// 			if (err){
// 				console.log( 'Error While Fetching Token... ', err )
// 				return;
// 			}
// 			oauth2_client.credentials = token
// 			storeToken(token)
// 			callback( oauth2_client, requestData )
// 		})
// 	})
// }
// 
// var token_id = ''
// 
// function storeToken(data){
// 	token_id = JSON.stringify(data)
// }
// 
// 
// function youtube_data() {
// 	return new Promise( (resolve, reject) => {
// 				
// 		const yt = google.youtube('v3')
// 		
// 		const oauth2Client = new OAuth2(
// 			key.client_id,
// 			key.private_key,
// 			'localhost'
// 		)
// 		
// 		const url = oauth2Client.generateAuthUrl({
// 			access_type: 'offline'
// 			scope: 'https://www.googleapis.com/auth/youtube'
// 		})
// 		
// 	})
// }
// 
// async function fetch() {
// 	
// 	try {
// 		await youtube_data()
// 	} catch (err) {
// 		console.error(err)
// 	}
// 	process.exit()
// }
// 
// 
// fetch()


 
/**
 * Start by acquiring a pre-authenticated oAuth2 client.
 */
// async function main() {
//   try {
// 	await getAuthenticatedClient()
//     // const oAuth2Client = await getAuthenticatedClient();
//     // Make a simple request to the Google Plus API using our pre-authenticated client. The `request()` method
//     // takes an AxiosRequestConfig object.  Visit https://github.com/axios/axios#request-config.
//     //const url = 'https://www.googleapis.com/plus/v1/people?query=pizza';
// 	//const url = 'https://www.googleapis.com/plus/v1/people/pizza';
// 	// const url = 'https://www.googleapis.com/plus/v1/activities?query=pizza'
// 	//     const res = await oAuth2Client.request({url})
//     // console.log(res.data);
//   } catch (e) {	
//     console.error(e)
//   }
//   process.exit()
// }
 
/**
 * Create a new OAuth2Client, and go through the OAuth2 content
 * workflow.  Return the full client to the callback.
 */
// function getAuthenticatedClient() {
//   return new Promise((resolve, reject) => {
//  	const api_url = "https://www.googleapis.com/plus/v1/activities?query=pizza&key="
// 	const options = {
// 	https.get( options, (resp) => {
// 		
// 		let data = ''
// 		
// 		resp.on('data', (chunk) => {
// 			data += chunk;
// 		})
// 		
// 		resp.on('end', () => {
// 			console.log( data )
// 		})
// 		
// 	}).on('error', (err) => {
// 		console.log( err )
// 	})
// 
// 	const server = http.createServer(async (req, res) => {
// 		const qs = 
// 	})
// 
// 
// 	})
// }
 
// main()

// const { OAuth2Client } = require( 'google-auth-library' ) 
// const http = require ( 'http' )
// const url = require( 'url' )
// const querystring = require( 'querystring' )
// const opn = require ( 'opn' )
// const keys = require ( './youtube.api.key.json' )
// 
// 
// async function main() {
// 	try {
// 		const oAuth2Client = await getAuthenticatedClient()
// 		const url = 'https://www.googleapis.com/plus/v1/people?query=pizza'
// 		const response = await oAuth2Client.request({url})
// 		console.log( response.data )
// 	} catch (message){
// 		console.error(message)
// 	}
// 	
// 	process.exit()
// }
// 
// function getAuthenticatedClient() {
// 	return new Promise( (resolve, reject) => {
// 		
// 		const oAuth2Client = new OAuth2Client(
// 			keys.web.client_id,
// 			keys.web.client_secret,
// 			keys.web.redirect_uris[0]
// 		)
// 		
// 		const authorizeUrl = oAuth2Client.generateAuthUrl({
// 			access_type: 'offline',
// 			scope: 'https://www.googleapis.com/auth/plus.me'
// 		})
// 		
// 		const server = http.createServer(async (request, response) => {
// 			if (request.url.indexOf('/oauth2callback') > -1 ){
// 				const qs = querystring.parse(url.parse(request.url).query)
// 				console.log(`Code is ${qs.code}`)
// 				response.end(
// 					'Authentication successful! Please return to the console'
// 				)
// 			
// 				server.close()
// 				
// 				const r = await oAuth2Client.getToken(qs.code)
// 				
// 				oAuth2Client.setCredentials(r.tokens)
// 				console.info('Token Retrieved')
// 				resolve( oAuth2Client )
// 			}
// 		}).listen(3000, () => {
// 			opn(authorizeUrl)
// 		})	
// 	})
// }
// 
// 
// main()


console.log( Date.now() )

// const {auth} = require( 'google-auth-library' )
// 
// 
// 
// async function getADC () {
// 	const response = await auth.getApplicationDefault()
// 	let client = response.credential
// 	
// 	if ( client.createScopedRequired &&
// 		 client.createScopedRequired()
// 		){
// 			const scopes = [
// 			'https://www.googleapis.com/auth/cloud-platform'
// 			]
// 			
// 			client = client.createScoped(scopes)
// 		}
// 	return {
// 		client: client,
// 		projectId: response.projectId
// 	}
// 	
// }
// 
// 
// async function main () {
// 	const adc = await getADC()
// 	const url = 'https://www.googleapis.com/dns/v1/projects/${adc.projectId}'
// 	
// 	const response = await adc.client.request({url})
// 	console.log( response.data )
// }
// 
// main().catch( console.error )