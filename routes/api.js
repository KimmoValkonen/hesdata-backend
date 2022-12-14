const express = require('express')
const {
  createMeasurement,
  getMeasurements,
  getMeasurement,
  deleteMeasurement,
  updateMeasurement
} = require('../controllers/measurement')

const router = express.Router()

// CRUD operations routes

// Create a new measurement
router.post('/', createMeasurement)

// Read all measurements
router.get('/', getMeasurements)

//Read a single measurement
router.get('/:id', getMeasurement)

// Update a measurement
router.patch('/:id', updateMeasurement)

// Delete a measurement
router.delete('/:id', deleteMeasurement)

module.exports = router