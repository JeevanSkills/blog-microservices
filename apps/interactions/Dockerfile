FROM node:20-alpine AS base
WORKDIR /usr/src

FROM base AS builder
WORKDIR /usr/src
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx nest build interactions && rm -rf node_modules && npm ci --omit=dev

FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /usr/src
COPY --from=builder /usr/src/node_modules ./node_modules
COPY --from=builder /usr/src/dist ./dist
EXPOSE 3003
CMD ["node", "dist/apps/interactions/main.js"]


