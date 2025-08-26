
const express = require('express');
const router = express.Router();
const Babysitter = require('../models/Babysitter');

// GET /api/babysitters - GET all babysitters
router.get('/', async (req, res) => {
  try {
    
        const babysitters = await Babysitter.find({}); // Fetch all babysitters from DB
        
        // Send response with success status and data
        res.status(200).json({
            success: true,
            count: babysitters.length,
            data: babysitters
        });

  } catch (err) {
    res.status(500).json({ 
        success: false,
        error: 'Server Error: ' + err.message 
    });
  }
});

// GET /api/babysitters/:id - GET a specific babysitter by ID
router.get('/:id', async (req, res) => {
  try {
    
    const babysitter = await Babysitter.findById(req.params.id); // Find by ID from URL parameter

    // Check if babysitter exists
    if (!babysitter) {
        return res.status(404).json({ 
            success: false,
            error: 'Babysitter not found' 
        });
    }

    // Send response with success status and data
        res.status(200).json({
            success: true,
            data: babysitters
        });

  } catch (err) {
    res.status(500).json({ 
        success: false,
        error: 'Server Error: ' + err.message 
    });
  }
});

// POST /api/babysitters - CREATE a new babysitter
router.post('/', async (req, res) => {
  try {
    
    const babysitter = await Babysitter.create(req.body); // Create new instance from request body

     // Send success response with created data
        res.status(201).json({
            success: true,
            data: babysitter
        });

  } catch (err) {
        // Handle validation errors
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({ 
            success: false,
            error: message.join(', ')
        });
    }
    res.status(500).json({
            success: false,
            error: 'Server Error: ' + err.message
        });
  }
});

// PUT /api/babysitters/:id - UPDATE a babysitter
router.put('/:id', async (req, res) => {
  try {
    // Find babysitter by ID and update with request body
    const updatedBabysitter = await Babysitter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    // Check if babysitter exists
    if (!updatedBabysitter) {
        return res.status(404).json({ 
            success: false,
            error: 'Babysitter not found' 
        });
    }
    // Send success response
        res.status(200).json({
            success: true,
            data: updatedBabysitter
        });
  } catch (err) {
    res.status(500).json({ 
        success: false,
        error: 'Server Error: ' + err.message 
    });
  }
});

// DELETE /api/babysitters/:id - DELETE a babysitter
router.delete('/:id', async (req, res) => {
  try {
    
    const deletedBabysitter = await Babysitter.findByIdAndDelete(req.params.id);
    
        // Check if babysitter exists
    if (!deletedBabysitter) {
        return res.status(404).json({ 
            success: false,
            error: 'Babysitter not found' 
        });
    }
        // Send success response
    res.status(200).json({ 
        success: true,
        message: 'Babysitter deleted' ,
        data: {}
    });
    
  } catch (err) {
    res.status(500).json({ 
        success: false,
        error: 'Server Error: ' + err.message 
    });
  }
});

module.exports = router;
