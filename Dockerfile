FROM node:16.13.0
#Create app directory
WORKDIR /app
#Install app dependencies
COPY  package*.json ./
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm","start"]
