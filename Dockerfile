FROM node:17 AS build

WORKDIR /var/www

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . ./

RUN yarn build

CMD ["yarn", "start-container"]
