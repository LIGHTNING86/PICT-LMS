const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel = mongoose.model('Admin', adminSchema);

module.exports = AdminModel;
