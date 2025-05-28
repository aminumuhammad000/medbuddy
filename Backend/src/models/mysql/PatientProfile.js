const db = require('./db'); // adjust the path to your DB connection

const PatientProfiles = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM patient_profiles');
    return rows;
  },
  async getByID(user_id) {
    const [rows] = await db.query('SELECT * FROM patient_profiles WHERE user_id = ?', [user_id]);
    return rows[0];
  },
  async updateByID(user_id, data) {
    const [result] = await db.query('UPDATE patient_profiles SET ? WHERE user_id = ?', [data, user_id]);
    return result;
  },
  async deleteByID(user_id) {
    const [result] = await db.query('DELETE FROM patient_profiles WHERE user_id = ?', [user_id]);
    return result;
  },
};

module.exports = PatientProfiles