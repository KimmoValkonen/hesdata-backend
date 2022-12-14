const express = require('express')
const router = express.Router()
const Measurement = require('../models/measurement')
const Controller = require('../controllers/measurement')

router.get('/api', (req, res, next) => {
  // This will return all measurements!
  const options = {
    // sort returned documents in ascending order
    sort: { _id: 1 },
    // Don't show the '_id' field
    projection: { _id: 0, dateTime: 1, solarPanelsHigh: 1, storageTankLow: 1, fireplaceHigh: 1, oilBurnerHigh: 1, storageTankHigh: 1, solarPump: 1, fireplacePump: 1, oilBurnerPump: 1, currentPowerkW: 1, dailyPowerkWh: 1, weeklyPowerkWh: 1, monthlyPowerkWh: 1, 
    },
  }
  const cursor = Measurement.find({}, options)
})
router.get('/api/latest', (req, res, next) => {
  const options = {
    // sort descending order to get the latest measurement as the first
    sort: { _id: -1 },
    // Include all but the '_id' field
    projection: { _id: 0, dateTime: 1, solarPanelsHigh: 1, storageTankLow: 1, fireplaceHigh: 1, oilBurnerHigh: 1, storageTankHigh: 1, solarPump: 1, fireplacePump: 1, oilBurnerPump: 1, currentPowerkW: 1, dailyPowerkWh: 1, weeklyPowerkWh: 1, monthlyPowerkWh: 1, 
    },
  }
  const cursor = Measurement.findOne({}, options)
})
router.get('/api/sp', (req, res, next) => {
  // Get all measurements having the solar energy pump running
  const query = { solarPump: { $gt: 0 } }
  const options = {
    // sort ascending
    sort: { _id: 1 },
    // Include all but the '_id' field
    projection: { _id: 0, dateTime: 1, solarPanelsHigh: 1, storageTankLow: 1, fireplaceHigh: 1, oilBurnerHigh: 1, storageTankHigh: 1, solarPump: 1, fireplacePump: 1, oilBurnerPump: 1, currentPowerkW: 1, dailyPowerkWh: 1, weeklyPowerkWh: 1, monthlyPowerkWh: 1, 
    },
  }
  const cursor = Measurement.findOne({}, options)
})

router.post('/api', (req, res, next) => {
  // Add measurement
  alert(req.body)
  Measurement.create(req.body)
    .then((data) => res.json(data))
    .catch(next)
})

router.route('/api/:id')
    .get(Controller.getMeasurement)

router.delete('/api/:id', (req, res, next) => {
  // Delete by an id
  Measurement.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next)
})

module.exports = router