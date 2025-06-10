# Base setup
FROM node:latest AS build

WORKDIR /spa

COPY ./package*.json .

RUN npm install

COPY . .

RUN npm run build

# Development setup
FROM build AS dev

ENV CHOKIDAR_USEPOLLING=true

CMD ["npm", "run", "dev"]

# Production setup
FROM nginx:latest AS prod

COPY --from=build /spa/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]






