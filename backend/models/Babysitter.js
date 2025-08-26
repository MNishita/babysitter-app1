// Babysitter data model
const mongoose = require('mongoose');

const BabysitterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  experience: { type: Number, required: true },
  location: { type: String, required: true },
  bio: { type: String },
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Babysitter', BabysitterSchema);
