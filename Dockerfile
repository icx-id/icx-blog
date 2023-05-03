# Building layer
FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn run build

COPY ./docker/default.conf /etc/nginx/sites-available/default

EXPOSE 80
