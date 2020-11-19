FROM node:10-alpine as builder

# install and cache app dependencies
COPY package.json package-lock.json ./
# RUN npm install --only=prod&& mkdir /react-frontend && mv ./node_modules ./react-frontend
RUN npm install --only=prod

COPY src/server/Server.js ./


COPY . .

EXPOSE 3000
#CMD [ "node", "Server.js" ]
RUN npm run build