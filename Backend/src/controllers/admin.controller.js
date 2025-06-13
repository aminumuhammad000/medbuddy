// controllers/adminController.js
const AdminModel = require('../models/mysql/Admin');

exports.index = async (req, res) => {
  try {
    const admins = await AdminModel.getAllAdmins();
    res.status(200).json({ success: true, data: admins });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching admins', error });
  }
};

exports.store = async (req, res) => {
  try {
    const { user_id, role } = req.body;
    if (!user_id || !role) {
      return res.status(400).json({ success: false, message: 'user_id and role are required' });
    }

    const newAdminId = await AdminModel.createAdmin(user_id, role);
    res.status(201).json({ success: true, message: 'Admin created', admin_id: newAdminId });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating admin', error });
  }
};

exports.show = async (req, res) => {
  try {
    const admin = await AdminModel.getAdminById(req.params.user_id);
    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }
    res.status(200).json({ success: true, data: admin });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching admin', error });
  }
};


exports.updateActivity = async (req, res) => {
  try {
    const { user_id } = req.params;

    const updated = await AdminModel.updateLastActivity(user_id);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Admin not found or not updated' });
    }

    res.status(200).json({ success: true, message: 'Activity updated' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating activity', error });
  }
};


exports.destroy = async (req, res) => {
  try {
    const { user_id } = req.params;
    const deleted = await AdminModel.deleteAdmin(user_id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Admin not found or already deleted' });
    }

    res.status(200).json({ success: true, message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting admin', error });
  }
};
