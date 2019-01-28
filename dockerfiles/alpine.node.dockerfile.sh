FROM mhart/alpine-node:8.5.0
MAINTAINER researchranks
LABEL alpine.node.typescript.api.youtube="0.0.1"
LABEL vendor="researchranks"
LABEL alpine.node.typescript.api.youtube.last.updated="03-05-2018"
LABEL alpine.node.typescript.version.production="no"

#USER root

# create app directories
RUN mkdir -p /var/www/app
WORKDIR /var/www/app


# installing http-server
RUN echo 'installing node modules' \
    && npm install --save --global typescript@2.5.2 \
    && npm install --save --global lite-server@2.3.0 \
    && npm install --save --global google-auth-library@1.3.1 \
    && npm install --save --global googleapis@27.0.0 \
    && npm install --save --global opn@5.2.0 \
    && npm cache verify

#EXPOSE 8080
# USER app
# 
# ENV HOME=/app
# 
# WORKDIR $HOME
# 
# ENTRYPOINT ["tsc"]
# 
# CMD ["--version"]

#CMD ["npm", "start"]
