# Stage 1
FROM node:latest as build

WORKDIR /spa

COPY ./package*.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:latest

COPY --from=build /spa/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]






