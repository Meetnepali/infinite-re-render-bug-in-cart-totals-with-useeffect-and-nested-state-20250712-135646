FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --silent
COPY . .
RUN npm run build
ENV HOST=0.0.0.0 PORT=3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
