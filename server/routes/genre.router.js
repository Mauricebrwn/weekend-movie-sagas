const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
//only for stretch dont mess with!!
router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

module.exports = router;