
const db = require('./db'); // Adjust the path as necessary
const Drugs = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM drugs');
    return rows;
  },
  async getByID(id) {
    const [rows] = await db.query('SELECT * FROM drugs WHERE id = ?', [id]);
    return rows[0];
  },
  async updateByID(id, data) {
    const [result] = await db.query('UPDATE drugs SET ? WHERE id = ?', [data, id]);
    return result;
  },
  async deleteByID(id) {
    const [result] = await db.query('DELETE FROM drugs WHERE id = ?', [id]);
    return result;
  },
};

module.exports = Drugs;