const Data = require('../models/data')

exports.getAll = async (req,res) => {
  const data = await Data.find({})
  // var array
  // data.map(e=>array += e)
  // console.log(array)
  
  res.status(200).send(data)
}

exports.post = async (req,res) => {
  const data = await Data.create(req.body)
  res.status(200).json({data})
}