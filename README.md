# Docker: Youtube API #
 > stack: alpine.node.typescript.api.youtube

- Docker:
	- Alpine: 3.6.2
	- Node: 8.5.0
	- TypeScript: 2.5.2
	- Lite-Server: 2.3.0
	- Google APIS: 27.0.0
	- Youtube API: 3.0.0
	- Google-Auth-Library: 1.3.1

### References: ### 
 - Docker Hub: https://hub.docker.com/r/researchranks/alpine.node.typescript.api.youtube/
 - Google Auth: https://github.com/google/google-auth-library-nodejs
 - Google Api Client: https://github.com/google/google-api-nodejs-client
 - Repository: https://github.com/climateamante/docker.alpine.node.typescript.api.youtube
 - Dockerfile: https://github.com/climateamante/docker.alpine.node.typescript.api.youtube/blob/master/docker-compose.yml
 - Base Image: https://hub.docker.com/r/mhart/alpine-node/



### Setup: ###
 - folder structure for docker.alpine:
    - ``var/www/app/``

 - folder structure for the lite-server:
    -  ``var/www/app/public/index.html``

 - tokens for authentication:
	1. ``youtube.api.client.json``
			> created from google developer console
	1. ``youtube.api.key.json``
			> created from google developer console
	1. ``youtube.api.single.json``
			> created from google developer console
	1. ``youtube.api.token.json``
			> created from node app
	
### NPM Installs ###
 
 - Lite-Server: 2.3.0
    - ``small minimal http server for web view``
 - Google APIS: 27.0.0
	- ``official google node api authentication``
	- Youtube API: 3.0.0
		- ``currnet version (2018) of yotubue api via googleapi@27.0.0``
 - Google-Auth-Library: 1.3.1
	- ``official google node api for oauth2 authentication``

### Example: ###

 - ``Docker run wants absolute paths``
 - ``docker-compose is just a stand-in for the docker-engine client``
 - Start with ``docker-compose up``
 - Otherwise use our custom bash command ``dockr`` for complex docker shortcuts

#### live:

```bash
docker run \
-v $PWD/app:/var/www/app \
-p 80:8080 \
--name youtube.api.dev \
-it --rm researchranks/alpine.node.typescript.api.youtube:latest npm start
```

#### debug:

```bash
docker run \
-v $PWD/app:/var/www/app \
-p 80:3000 \
-p 8080:8080 \
--name youtube.api.dev \
-it --rm researchranks/alpine.node.typescript.api.youtube:latest /bin/ash
```