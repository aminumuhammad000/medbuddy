
const db = require('../db'); // Adjust the path as necessary

const Orders = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM orders');
    return rows;
  },
  async getByID(id) {
    const [rows] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    return rows[0];
  },
  async updateByID(id, data) {
    const [result] = await db.query('UPDATE orders SET ? WHERE id = ?', [data, id]);
    return result;
  },
  async deleteByID(id) {
    const [result] = await db.query('DELETE FROM orders WHERE id = ?', [id]);
    return result;
  },
};

module.exports = Orders;