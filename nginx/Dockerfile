# Base image
FROM nginx:latest AS base

RUN rm /etc/nginx/conf.d/default.conf

COPY ./api/public /api/public

# Development setup
FROM base AS dev

COPY ./nginx/conf.d/dev.conf /etc/nginx/conf.d/default.conf

# Production setup
FROM base AS prod

COPY ./nginx/conf.d/prod.conf /etc/nginx/conf.d/default.conf