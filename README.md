<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Microservicio de Conversión de Monedas BBVA

Este microservicio permite convertir cantidades de una moneda a otra utilizando códigos ISO 4217,que realiza la conversión de divisas obteniendo la información de un servicio externo. 

http://api.exchangeratesapi.io/v1/latest

Está construido con NestJS siguiendo una arquitectura hexagonal.

## Características

- Conversión de monedas utilizando una API http://api.exchangeratesapi.io
- Validación de parámetros de entrada
- Autenticación mediante JWT
- Documentación API con Swagger
- Documentación con Compodoc
- Pruebas unitarias
- Dockerización para contenerizar

## Requisitos

- Node.js (v16 o superior)
- npm
- Docker y Docker Compose (para la versión containerizada)

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
CURRENCY_API_URL=http://api.exchangeratesapi.io/v1/latest
CURRENCY_API_KEY=your_api_key
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=3600
```

## Download the repository

```bash
$ 
```

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar el servidor en modo desarrollo
npm run start:dev

# Compilar para producción
npm run build

# Ejecutar en modo producción
npm run start:prod
```

## Ejecutar con Docker

```bash
# Construir y ejecutar con Docker Compose
docker-compose up -d
```

## Endpoints

### Convertir Moneda

```
GET /currency-conversion/convert
```

**Parámetros de consulta:**

- `amount`: Monto a convertir (número positivo)
- `sourceCurrency`: Moneda de origen (código ISO 4217, 3 caracteres)
- `destinationCurrency`: Moneda de destino (código ISO 4217, 3 caracteres)

**Respuesta:**

```json
{
  "conversionDate": "2023-07-27T12:34:56.789Z",
  "conversionRate": 0.91,
  "originalAmount": 100,
  "resultingAmount": 91
}
```

## Documentación API

La documentación de la API está disponible en Swagger UI:

```
http://localhost:3000/api
```

## Arquitectura

El proyecto sigue una arquitectura hexagonal (puertos y adaptadores) con tres capas principales:

- **Domain**: Contiene las entidades, interfaces y reglas de negocio
- **Aplication**: Contiene los casos de uso y orquesta el flujo de datos
- **Infraestructure**: Contiene los adaptadores para comunicarse con sistemas externos

## Pruebas

```bash
# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas con cobertura
npm run test:cov
```
