# build stage
FROM node:18-buster as build-stage
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# production stage
FROM nginx:stable-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
