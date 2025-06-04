# Development stage
FROM node:18 AS dev

WORKDIR /app
COPY frontend .
RUN npm install --ignore-scripts
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

