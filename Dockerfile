FROM node:24.19.0-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

# node:*-bookworm-slim images ship a built-in unprivileged `node` user (uid 1000).
# Run as that user instead of root at container runtime.
RUN chown -R node:node /app
USER node

# Cloud Run manages its own health probing and ignores this, but it's useful
# for local `docker run` and any future non-Cloud-Run deployment.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["npm", "run", "start", "--", "--hostname", "0.0.0.0", "--port", "3000"]
