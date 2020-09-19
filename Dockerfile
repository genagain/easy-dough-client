### STAGE 1: Build ###
FROM node:10.16.3 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
## Ideally copy everything instead of each thing
COPY package.json /usr/src/app/package.json
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY tailwind.js /usr/src/app/tailwind.js
COPY postcss.config.js /usr/src/app/postcss.config.js
ARG REACT_APP_SERVER_BASE_URL
ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL
RUN touch .env.production
RUN echo "export REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL" > .env.production
RUN npm install --silent
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY nginx/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN apk update && apk add bash
EXPOSE 80
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
