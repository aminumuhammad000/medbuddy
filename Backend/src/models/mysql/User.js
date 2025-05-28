const db = require('./db'); // adjust the path to your DB connection

const Users = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  },
  async getByID(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },
  async updateByID(id, data) {
    const [result] = await db.query('UPDATE users SET ? WHERE id = ?', [data, id]);
    return result;
  },
  async deleteByID(id) {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return result;
  },
};

module.exportsn = Users