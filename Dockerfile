# Step 1: Build the React TypeScript app
FROM node:20.12.2-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the built app with Nginx
FROM nginx:alpine

# Copy the built files from the build stage to the Nginx HTML directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Copy custom Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
