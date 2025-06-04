FROM node:18

# Create directories
RUN mkdir -p /tmp/frontend && \
    mkdir -p /tmp/backend && \
    mkdir -p /tmp/.tours

# Copy files
COPY package* /tmp/
COPY captain* /tmp/
COPY frontend /tmp/frontend
COPY backend /tmp/backend
COPY .tours /tmp/.tours


# Set working directory
WORKDIR /tmp

# Install dependencies
RUN npm install --ignore-scripts

# Expose port 80 (correct syntax)
EXPOSE 80

# Set entrypoint
ENTRYPOINT ["npm", "run"]
CMD ["dev"]