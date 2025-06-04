FROM node:18

WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install --ignore-scripts
COPY frontend .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
