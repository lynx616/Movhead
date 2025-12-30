# Use official Node base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files & install deps
COPY package*.json ./
RUN npm install

# Copy entire project & build
COPY . .
RUN npm run build

# --- Serve stage ---
FROM nginx:stable-alpine
# Copy built files from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose web port & start NGINX
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
