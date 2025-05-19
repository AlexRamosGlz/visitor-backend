FROM node:lts-alpine3.20

EXPOSE 8080

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "src/server.js"]

