const db = require('./db'); // Adjust the path as necessary

const Doctors = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM doctors');
    return rows;
  },
  async getByID(user_id) {
    const [rows] = await db.query('SELECT * FROM doctors WHERE user_id = ?', [user_id]);
    return rows[0];
  },
  async updateByID(user_id, data) {
    const [result] = await db.query('UPDATE doctors SET ? WHERE user_id = ?', [data, user_id]);
    return result;
  },
  async deleteByID(user_id) {
    const [result] = await db.query('DELETE FROM doctors WHERE user_id = ?', [user_id]);
    return result;
  },
};

module.exports = Doctors;