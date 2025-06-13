
const db = require('./db'); // Adjust the path as necessary

const Prescriptions = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM prescriptions');
    return rows;
  },
  async getByID(id) {
    const [rows] = await db.query('SELECT * FROM prescriptions WHERE id = ?', [id]);
    return rows[0];
  },
  async updateByID(id, data) {
    const [result] = await db.query('UPDATE prescriptions SET ? WHERE id = ?', [data, id]);
    return result;
  },
  async deleteByID(id) {
    const [result] = await db.query('DELETE FROM prescriptions WHERE id = ?', [id]);
    return result;
  },
};

module.exports = Prescriptions;