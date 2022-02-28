const db = require('./db');

const findAll = async () => {
  return await db('species');
}

module.exports = { findAll };

