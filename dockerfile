# Building layer
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn run build

RUN yarn serve

EXPOSE 80