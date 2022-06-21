FROM node:alpine3.15

WORKDIR /code
COPY package.json /code
RUN npm install
COPY . /code

CMD ["npm", "start"]

EXPOSE 80
EXPOSE 443
