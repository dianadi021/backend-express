# Gunakan base image Node.js
FROM node:22-alpine

# Atur working directory dalam container
WORKDIR /usr/src/app

# Salin file package.json dan pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm global
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Salin semua file ke dalam container
COPY . .

# Ekspos port aplikasi
EXPOSE 3000

# Jalankan aplikasi dalam mode development
CMD ["pnpm", "dev"]
