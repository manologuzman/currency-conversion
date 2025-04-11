FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/documentation ./documentation
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./

# Configuramos las variables de entorno
ENV NODE_ENV=production
ENV PORT=3000

# Exponemos el puerto
EXPOSE ${PORT}

# Ejecutamos la aplicación
CMD ["node", "dist/main"] 