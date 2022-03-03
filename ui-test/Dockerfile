FROM node:16

WORKDIR /usr/app

COPY . .

RUN npm install
RUN npm run build
RUN npm install serve -g

EXPOSE 3000
CMD ["serve", "dist"]