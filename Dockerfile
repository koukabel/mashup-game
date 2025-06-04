# Development stage
FROM node:18 AS dev

WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# Production build stage
FROM node:18 AS builder
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Production run stage
FROM nginx:stable-alpine
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
