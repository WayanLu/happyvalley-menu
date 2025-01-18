FROM node:20

WORKDIR /app

# Copy package.json and package-lock.json for optimized caching
COPY client/package*.json ./

# Install dependencies
RUN npm cache clean --force
RUN npm install --no-optional --verbose --legacy-peer-deps

# Copy the rest of the application source files
COPY . .

# Expose the port
EXPOSE 3000

# Set environment variables for development
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

CMD ["npm", "start"]
