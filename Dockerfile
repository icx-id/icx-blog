FROM --platform=linux/x86_64 node:18-slim AS builder

RUN apt-get update && apt-get install -y nginx

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 9000

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
