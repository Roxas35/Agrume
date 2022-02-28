const { Router } = require('express');
const variety = require('../models/variety');

const router = new Router();

router.get('/variety', async (req, res) => {
  const varietys = await variety.findAll();
  res.json(varietys);
});

module.exports = variety;