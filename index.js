const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use('/api/dispersion_funds', require('./routes/TransactionRoutes'));

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT, () =>
    console.log(`Servidor corriendo en ${process.env.PORT}`)
  );
}

module.exports = app;