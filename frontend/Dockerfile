FROM node:20

WORKDIR /app
COPY . .

RUN npm cache clean --force
RUN npm install

RUN npm run build
CMD [ "npm", "start"]