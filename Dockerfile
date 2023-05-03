# Building layer
FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:1.18-alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/public .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
