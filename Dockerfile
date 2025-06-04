FROM node:18
RUN mkdir /tmp/frontend && mkdir /tmp/backend && mkdir /tmp/.tours && mkdir /tmp/.husky
COPY package* tmp/
COPY captain* tmp/
COPY frontend /tmp/frontend
COPY backend /tmp/backend
COPY .tours tmp/.tours
COPY .husky tmp/.husky
WORKDIR /tmp
RUN npm install --ignore-scripts
ENTRYPOINT ["npm", "run"]
CMD ["dev"]

