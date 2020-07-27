FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
CMD  npm run start
FROM nginx:alpine
COPY --from=node /app/dist/test-app/ /usr/share/nginx/html
