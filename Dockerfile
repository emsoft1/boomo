
# Use the official Node.js 14 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm install
EXPOSE 3010

# Start the Next.js application
CMD ["npm", "run", "dev"]
