FROM node:alpine
WORKDIR /turkey-weather-app
ENV PATH="./app/node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]