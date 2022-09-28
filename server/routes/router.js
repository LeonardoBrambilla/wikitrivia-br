const express = require('express')
const router = express.Router()

const {
  post,
  getAll
} = require("../controllers/controllers")

router.route('/').get(getAll).post(post)

module.exports = router