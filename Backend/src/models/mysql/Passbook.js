
const db = require('../db'); // Adjust the path as necessary
const Passbook = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM passbook');
    return rows;
  },
  async getByID(id) {
    const [rows] = await db.query('SELECT * FROM passbook WHERE id = ?', [id]);
    return rows[0];
  },
  async updateByID(id, data) {
    const [result] = await db.query('UPDATE passbook SET ? WHERE id = ?', [data, id]);
    return result;
  },
  async deleteByID(id) {
    const [result] = await db.query('DELETE FROM passbook WHERE id = ?', [id]);
    return result;
  },
};

module.exports = Passbook;