// models/adminModel.js
const db = require('./db');

const AdminModel = {
  async getAllAdmins() {
    const [rows] = await db.query('SELECT * FROM admins');
    return rows;
  },

  async getAdminById(id) {
    const [rows] = await db.query('SELECT * FROM admins WHERE user_id = ?', [id]);
    return rows[0];
  },

  async createAdmin(user_id, role) {
    const [result] = await db.query(
      'INSERT INTO admins (user_id, role) VALUES (?, ?)',
      [user_id, role]
    );
    return result.insertId;
  },

   async deleteAdmin(id) {
    const [result] = await db.query('DELETE FROM admins WHERE user_id = ?', [id]);
    return result.affectedRows > 0;
  },

};

module.exports = AdminModel;
