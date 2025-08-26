// Babysitter data model
const mongoose = require('mongoose');

const BabysitterSchema = new mongoose.Schema({
  
    name: { 
    type: String, 
    required: true,
    trim: true
  },

  // Pay rate per hour
  payRatePerHour: {
    type: Number,
    required: true,
    min: 0
  },

  // Available tasks for the baby
  availableTasks: [{
    type: String,
    required: true
  }],

  // Contact information
  phone: { 
    type: String, 
    required: true,
    match: [/^\d{10}$/, 'Please fill a valid 10-digit phone number']
  },
  
  email: { 
    type: String, 
    required: true,
    unique: true,
  },

  experience: { 
    type: String, 
    enum: ['Beginner', 'Intermediate', 'Expert'],
    default: 'Beginner'
  },
  
  isAvailable: { 
    type: Boolean, 
    default: true 
  }
},{ 
    timestamps: true
});

module.exports = mongoose.model('Babysitter', BabysitterSchema);
