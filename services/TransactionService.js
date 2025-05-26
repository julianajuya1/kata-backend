const model = require('../models/TransactionModel');

exports.getTransactions = async () => {
  const [rows] = await model.getAll(); 
  return rows
};

exports.getTotalDispersedByClient = async () => {
    const [rows] = await model.getTotalDispersedByClient(); 
    return rows; 
}; 

exports.getMaximumAmount = async () => {
    const [rows] = await model.getMaximumAmount(); 
    return rows; 
}; 

exports.getDayCostumer = async () => {
    const [rows] = await model.getDayCostumer(); 
    return rows; 
}; 

exports.getAverageTransactionCustomer = async () => {
    const [rows] = await model.getAverageTransactionCustomer(); 
    return rows; 
}; 

exports.getTop = async () => {
    const [rows] = await model.getTop(); 
    return rows; 
}; 