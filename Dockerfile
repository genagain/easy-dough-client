### STAGE 1: Build ###
FROM node:9.11.1 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY public /usr/src/app/public
COPY src /usr/src/app/src
RUN npm install --silent
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN apk update && apk add bash
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
