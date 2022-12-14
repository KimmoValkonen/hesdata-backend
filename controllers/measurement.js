const Measurement = require('../models/measurement')
const mongoose = require('mongoose')

// Get all measurements
const getMeasurements = async (req, res) => {
  const measurements = await Measurement.find({}).sort({_id: 1})
  res.status(200).json(measurements)
}

// Get a single measurement
const getMeasurement = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({Error: 'No such measurement'})
  }
  const measurement = await Measurement.findById(req.params.id)
  if (!measurement) {
    return res.status(404).json({Error: 'No such measurement'})
  }
  res.status(200).json(measurement)
}

// Create a new measurement
const createMeasurement = async (req, res) => {
  const {dateTime, solarPanelsHigh, storageTankLow, fireplaceHigh, oilBurnerHigh, storageTankHigh, solarPump, fireplacePump, oilBurnerPump, currentPowerkW, dailyPowerkWh, weeklyPowerkWh, monthlyPowerkWh} = req.body
  // if (!dateTime) {
  //   // Missing value handling
  // }
  // if(!solarPanelsHigh) {
  //   // Missing value handling
  // }
  // if(!storageTankLow) {
  //   // Missing value handling
  // }
  // if(!fireplaceHigh) {
  //   // Missing value handling
  // }
  // if(!oilBurnerHigh) {
  //   // Missing value handling
  // }
  // if(!storageTankHigh) {
  //   // Missing value handling
  // }
  // if(!solarPump) {
  //   // Missing value handling
  // }
  // if(!fireplacePump) {
  //   // Missing value handling
  // }
  // if(!oilBurnerPump) {
  //   // Missing value handling
  // }
  // if(!currentPowerkW) {
  //   // Missing value handling
  // }
  // if(!dailyPowerkWh) {
  //   // Missing value handling
  // }
  // if(!weeklyPowerkWh) {
  //   // Missing value handling
  // }
  // if(!monthlyPowerkWh) {
  //   // Missing value handling
  // }

  // Add measurement values to database
  try {
    const measurement = await Measurement.create({dateTime, solarPanelsHigh, storageTankLow, fireplaceHigh, oilBurnerHigh, storageTankHigh, solarPump, fireplacePump, oilBurnerPump, currentPowerkW, dailyPowerkWh, weeklyPowerkWh, monthlyPowerkWh})
    res.status(200).json(measurement)
  } catch (error) {
    res.status(400).json({Error: error.message})
    // Automation errors handling
  }
}

// Update a measurement
const updateMeasurement = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({Error: 'No such measurement'})
  }
  const measurement = await Measurement.findOneAndUpdate({_id: req.params.id}, {
    ...req.body
  })
  if (!measurement) {
    return res.status(400).json({Error: 'No such measurement'})
  }
  const measurement_now = await Measurement.findById(req.params.id)
  res.status(200).json(measurement_now)
}

// Delete a measurement
const deleteMeasurement = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({Error: 'No such measurement'})
  }
  const measurement = await Measurement.findOneAndDelete({_id: req.params.id})
  if (!measurement) {
    return res.status(400).json({Error: 'No such measurement'})
  }
  res.status(200).json(measurement)
}

module.exports = {
  getMeasurements,
  getMeasurement,
  createMeasurement,
  deleteMeasurement,
  updateMeasurement
}