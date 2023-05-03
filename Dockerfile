# Building layer
FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn run build

FROM nginx:1.18-alpine AS deploy

WORKDIR /usr/share/nginx/html
COPY ./docker/default.conf /etc/nginx/sites-available/default
ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 9000
