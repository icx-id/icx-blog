FROM --platform=linux/x86_64 node:18-slim AS builder

RUN apt-get update && apt-get install -y nginx

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

COPY ./docker/default.conf /etc/nginx/sites-available/default

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
