FROM node:16.17-alpine3.16
ENV NODE_ENV production

WORKDIR /app

COPY . /app
RUN npm install && npm cache clean --force

CMD ["node", "server.js"]
EXPOSE 8080