FROM node:16-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm

RUN pnpm i

COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]