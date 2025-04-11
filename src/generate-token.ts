import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Crear una instancia del servicio JWT
const jwtService = new JwtService({
  secret: process.env.JWT_SECRET,
});

// Crear un payload para el token
const payload = {
  sub: '1234567890', // ID de usuario de ejemplo
  username: 'usuario_prueba',
  roles: ['usuario'],
};

// Generar el token con 24 horas de duración
const token = jwtService.sign(payload, {
  expiresIn: '24h', // Establecer una duración más larga (24 horas)
});

console.log('Token JWT generado:');
console.log(token);
console.log('\nComando curl para probar:');
console.log(
  `curl -X GET "http://localhost:3000/currency-conversion/convert?amount=100&sourceCurrency=USD&destinationCurrency=EUR" -H "Authorization: Bearer ${token}"`,
);
