#Base image
FROM node:16.13.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g pm2

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000

CMD [ "pm2-runtime", "start", "app.js" ]