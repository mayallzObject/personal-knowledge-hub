# ---- Base Node image ----
FROM node:22-alpine AS base
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
ENV NODE_ENV=development
ENV HUSKY=0
COPY package.json package-lock.json* ./
RUN npm ci

# ---- Builder ----
FROM deps AS builder
COPY . .
RUN npm run build

# ---- Production image ----
FROM base AS prod
ENV NODE_ENV=production
# Create a non-root user and group
RUN addgroup -S nodegroup && adduser -S nodeuser -G nodegroup
# Set permissions for the app directory
RUN mkdir -p /app && chown -R nodeuser:nodegroup /app
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
USER nodeuser
EXPOSE 4173
CMD ["npm", "run", "preview"]

# ---- Development image ----
FROM deps AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]