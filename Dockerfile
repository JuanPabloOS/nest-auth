FROM node:12-stretch 
USER node

WORKDIR /home/node/src

COPY --chown=node:node package.json package-lock.json ./

RUN npm install

COPY --chown=node:node . .

CMD ["npm", "run", "start:dev"]