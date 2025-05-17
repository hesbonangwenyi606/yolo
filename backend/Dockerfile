# Use an official Node runtime as a parent image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app’s source code
COPY . .

# Expose the port your app runs on (adjust if needed)
EXPOSE 3000

# Command to run your app (adjust if your main file is different)
CMD ["node", "server.js"]

