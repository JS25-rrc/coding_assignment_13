# Stage 1 — Build
FROM node:25-alpine AS builder

WORKDIR /singh_jasanpreet_ui_garden_build_checks

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Stage 2 — Serve with Nginx on port 8018
FROM nginx:stable-alpine

COPY --from=builder /singh_jasanpreet_ui_garden_build_checks/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]