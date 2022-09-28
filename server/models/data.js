const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema({
  date_prop_id: String,
  description: String,
  id: String,
  image:String,
  instance_of:[String],
  label: String,
  occupations:[String],
  page_views:Number,
  wikipedia_title:String,
  year:Number
})

module.exports = mongoose.model("Data",DataSchema)