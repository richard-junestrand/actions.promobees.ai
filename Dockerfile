FROM node:18-bullseye
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["npm", "run", "prod"]