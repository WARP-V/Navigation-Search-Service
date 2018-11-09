FROM node:10.11.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN
npm install -P
npm run build
npm run db:setup

EXPOSE 3002

CMD [ "npm", "start" ]