const db = require('../db/connection');

// Listar Transacciones
exports.getAll = () => {
  return db.query(`
    SELECT t.id, t.transaction_date, t.customer_id, c.client_name AS customer_name, t.amount, t.means_payment
    FROM transactions t
    JOIN customers c ON t.customer_id = c.id;
  `);
};

// Total Dispersado por Cliente
exports.getTotalDispersedByClient = () => {
    return db.query(`
        SELECT c.client_name, SUM(t.amount) AS total
        FROM transactions t
        JOIN customers c ON t.customer_id = c.id
        GROUP BY c.id; 
    `); 
}; 

// Monto Máximo Dispersado
exports.getMaximumAmount = () => {
    return db.query(`
        SELECT c.client_name, SUM(t.amount) AS total
        FROM transactions t
        JOIN customers c ON t.customer_id = c.id
        GROUP BY c.id
        ORDER BY total DESC
        LIMIT 1; 
    `); 
}

// Transacciones por día y cliente
exports.getDayCostumer = () => {
    return db.query(`
        SELECT t.transaction_date, SUM(t.amount) AS total_dispersed
        FROM transactions t
        GROUP BY t.transaction_date
        ORDER BY t.transaction_date, total_dispersed DESC;
    `); 
}

// Cálculo Promedio Transaccional por Cliente
exports.getAverageTransactionCustomer = () => {
    return db.query(`
        SELECT c.client_name, SUM(t.amount) AS total, COUNT(*) AS transactions, AVG(t.amount) AS average
        FROM transactions t
        JOIN customers c ON t.customer_id = c.id
        GROUP BY c.id;
    `); 
}

// Obtener top 3 con mayor monto transaccional
exports.getTop = () => {
    return db.query(`
        SELECT c.client_name,SUM(t.amount) AS total_dispersed
        FROM transactions t
        JOIN customers c ON t.customer_id = c.id
        GROUP BY c.id
        ORDER BY total_dispersed DESC
        LIMIT 3; 
    `); 
}
