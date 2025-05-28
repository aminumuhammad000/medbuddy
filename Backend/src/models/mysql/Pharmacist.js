
const db = require('./db'); // Adjust the path as necessary

const Pharmacists = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM pharmacists');
    return rows;
  },
  async getByID(user_id) {
    const [rows] = await db.query('SELECT * FROM pharmacists WHERE user_id = ?', [user_id]);
    return rows[0];
  },
  async updateByID(user_id, data) {
    const [result] = await db.query('UPDATE pharmacists SET ? WHERE user_id = ?', [data, user_id]);
    return result;
  },
  async deleteByID(user_id) {
    const [result] = await db.query('DELETE FROM pharmacists WHERE user_id = ?', [user_id]);
    return result;
  },
};

module.exports = Pharmacists;