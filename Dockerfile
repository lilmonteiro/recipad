FROM node:16-alpine3.12
WORKDIR /app

COPY package.json /app/package.json

RUN npm install --silent
RUN npm instal react-scripts@3.4.1 -g --silent

EXPOSE 3000

CMD ["npm", "start"]

