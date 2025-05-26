const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API - Dispersión de Fondos',
    version: '1.0.0',
    description: 'Documentación de la API de dispersión de fondos.',
  },
  servers: [
    {
      url: 'https://kata-backend-production.up.railway.app/api',
      description: 'Servidor en producción',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
