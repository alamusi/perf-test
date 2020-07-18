FROM node:12.18.2-alpine

# copy the repo to app directory
RUN mkdir -p /usr/src/app
COPY . /usr/src/app

# prepare the app
WORKDIR /usr/src/app
RUN npm install

# run
CMD [ "npm", "start" ]