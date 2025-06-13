
const db = require('../mysql/db'); // Adjust the path as necessary

const Consultations = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM consultations');
    return rows;
  },
  async getByID(id) {
    const [rows] = await db.query('SELECT * FROM consultations WHERE id = ?', [id]);
    return rows[0];
  },
  async updateByID(id, data) {
    const [result] = await db.query('UPDATE consultations SET ? WHERE id = ?', [data, id]);
    return result;
  },
  async deleteByID(id) {
    const [result] = await db.query('DELETE FROM consultations WHERE id = ?', [id]);
    return result;
  },
};

module.exports = Consultations