const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
  res.send('Blockchain info');
});



module.exports = router; // Ensure this export is at the bottom
