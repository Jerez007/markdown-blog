//contains all the routes related to articles

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send('In articles')
})

module.exports = router