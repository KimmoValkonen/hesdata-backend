require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

// Do NOT share the MongoDB deployment's connection string in .env file!!!
const uri = process.env.MONGO_URI
const PORT = process.env.PORT || 443
const WDS_SOCKET_PORT = 443

MongoClient.connect(uri, function(err, db) {
  if (err) throw err
  var dbo = db.db("data")
  var myobj = [
      { "dateTime": new Date("2022-07-20T13:52:56"), "solarPanelsHigh": 84, "storageTankLow": 74, "fireplaceHigh": 26, "oilBurnerHigh": 67, "storageTankHigh": 74, "solarPump": 1.00, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 5.6, "dailyPowerkWh": 28, "weeklyPowerkWh": 81, "monthlyPowerkWh": 433 },
      { "dateTime": new Date("2022-07-20T14:09:58"), "solarPanelsHigh": 84, "storageTankLow": 75, "fireplaceHigh": 26, "oilBurnerHigh": 67, "storageTankHigh": 75, "solarPump": 0.97, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 5.1, "dailyPowerkWh": 30, "weeklyPowerkWh": 83, "monthlyPowerkWh": 435 },
      { "dateTime": new Date("2022-07-20T14:11:13"), "solarPanelsHigh": 85, "storageTankLow": 74, "fireplaceHigh": 26, "oilBurnerHigh": 67, "storageTankHigh": 75, "solarPump": 0.96, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 5.1, "dailyPowerkWh": 30, "weeklyPowerkWh": 83, "monthlyPowerkWh": 435 },
      { "dateTime": new Date("2022-07-20T14:15:16"), "solarPanelsHigh": 84, "storageTankLow": 75, "fireplaceHigh": 26, "oilBurnerHigh": 67, "storageTankHigh": 76, "solarPump": 0.83, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 5.6, "dailyPowerkWh": 30, "weeklyPowerkWh": 83, "monthlyPowerkWh": 435 },
      { "dateTime": new Date("2022-07-20T14:16:33"), "solarPanelsHigh": 84, "storageTankLow": 74, "fireplaceHigh": 26, "oilBurnerHigh": 66, "storageTankHigh": 75, "solarPump": 0.16, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 5.6, "dailyPowerkWh": 30, "weeklyPowerkWh": 83, "monthlyPowerkWh": 435 },
      { "dateTime": new Date("2022-07-20T14:17:48"), "solarPanelsHigh": 87, "storageTankLow": 75, "fireplaceHigh": 26, "oilBurnerHigh": 67, "storageTankHigh": 76, "solarPump": 1.00, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 5.6, "dailyPowerkWh": 30, "weeklyPowerkWh": 83, "monthlyPowerkWh": 435 },
      { "dateTime": new Date("2022-07-20T14:19:03"), "solarPanelsHigh": 89, "storageTankLow": 75, "fireplaceHigh": 26, "oilBurnerHigh": 67, "storageTankHigh": 76, "solarPump": 1.00, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 6.1, "dailyPowerkWh": 31, "weeklyPowerkWh": 84, "monthlyPowerkWh": 436 },
      { "dateTime": new Date("2022-07-20T14:21:43"), "solarPanelsHigh": 85, "storageTankLow": 75, "fireplaceHigh": 26, "oilBurnerHigh": 67, "storageTankHigh": 76, "solarPump": 0.59, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 6.1, "dailyPowerkWh": 31, "weeklyPowerkWh": 84, "monthlyPowerkWh": 436 },
      { "dateTime": new Date("2022-07-20T14:24:25"), "solarPanelsHigh": 88, "storageTankLow": 75, "fireplaceHigh": 26, "oilBurnerHigh": 67, "storageTankHigh": 76, "solarPump": 1.00, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 6.1, "dailyPowerkWh": 31, "weeklyPowerkWh": 84, "monthlyPowerkWh": 436 },
      { "dateTime": new Date("2022-07-20T14:25:39"), "solarPanelsHigh": 84, "storageTankLow": 75, "fireplaceHigh": 26, "oilBurnerHigh": 66, "storageTankHigh": 76, "solarPump": 0.65, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 5.6, "dailyPowerkWh": 31, "weeklyPowerkWh": 84, "monthlyPowerkWh": 436 },
      { "dateTime": new Date("2022-07-20T14:28:29"), "solarPanelsHigh": 91, "storageTankLow": 75, "fireplaceHigh": 26, "oilBurnerHigh": 67, "storageTankHigh": 76, "solarPump": 1.00, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 5.6, "dailyPowerkWh": 31, "weeklyPowerkWh": 84, "monthlyPowerkWh": 436 },
      { "dateTime": new Date("2022-07-20T14:29:44"), "solarPanelsHigh": 89, "storageTankLow": 75, "fireplaceHigh": 26, "oilBurnerHigh": 66, "storageTankHigh": 76, "solarPump": 1.00, "fireplacePump": 0.00, "oilBurnerPump": 0.00, "currentPowerkW": 5.6, "dailyPowerkWh": 31, "weeklyPowerkWh": 84, "monthlyPowerkWh": 436 }
  ]
  dbo.collection("measurements").insertMany(myobj, function(err, res) {
    if (err) throw err
    console.log("Number of documents inserted: " + res.insertedCount)
    db.close()
  })
})