const service = require("../services/TransactionService");

exports.getTransacciones = async (req, res) => {
  try {
    const data = await service.getTransactions();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTotalDispersedByClient = async (req, res) => {
  try {
    const data = await service.getTotalDispersedByClient();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMaximumAmount = async (req, res) => {
  try {
    const data = await service.getMaximumAmount();
    const clientTop = data[0];
    res.json(clientTop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDayCostumer = async (req, res) => {
  try {
    const data = await service.getDayCostumer();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAverageTransactionCustomer = async (req, res) => {
  try {
    const data = await service.getAverageTransactionCustomer();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTop = async (req, res) => {
  try {
    const data = await service.getTop();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};