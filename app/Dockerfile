# Build a lightweight Node.js image
FROM node:20-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source
COPY src ./src
# COPY .env ./.env  # optional at runtime; will be ignored if missing

EXPOSE 3000
CMD ["npm", "start"]

