FROM node:20-alpine

WORKDIR /backend

COPY dist .
COPY package.json package-lock.json ./

ENV NODE_ENV=production

RUN npm ci --omit=dev

EXPOSE 8000

CMD ["node", "index.js"]
