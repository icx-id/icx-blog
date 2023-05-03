# Building layer
FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 9000

CMD ["yarn","serve"]
