FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install -g pnpm

RUN pnpm install --frozen-lockfile

COPY . ./

EXPOSE 3030

CMD [ "pnpm", "start" ]