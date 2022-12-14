const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema for measurements can miss some values that can be estimated from the curve trend.
// It is better to calculate and fill in the gaps than miss the whole measurement serie.
const measurementSchema = new Schema({
  dateTime: {
    //type: Date,
    // default: Date.now,
    type: String,
    required: false
  },
  solarPanelsHigh: {
    type: Number,
    required: false
  },
  storageTankLow: {
    type: Number,
    required: false
  },
  fireplaceHigh: {
    type: Number,
    required: false
  },
  oilBurnerHigh: {
    type: Number,
    required: false
  },
  storageTankHigh: {
    type: Number,
    required: false
  },
  solarPump: {
    type: Number,
    required: false
  },
  fireplacePump: {
    type: Number,
    required: false
  },
  oilBurnerPump: {
    type: Number,
    required: false
  },
  currentPowerkW: {
    type: Number,
    required: false
  },
  dailyPowerkWh: {
    type: Number,
    required: false
  },
  weeklyPowerkWh: {
    type: Number,
    required: false
  },
  monthlyPowerkWh: {
    type: Number,
    required: false
  }
})

// Measurement Model
// const Measurement = mongoose.model('measurement', measurementSchema)
// module.exports = Measurement
module.exports = mongoose.model('Measurement', measurementSchema)