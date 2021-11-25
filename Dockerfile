FROM node:13.12.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install --silent \
    && apk del .gyp
RUN npm install react-scripts@4.0.3 -g --silent
COPY . ./
CMD ["npm", "start"]