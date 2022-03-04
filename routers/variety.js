const { Router } = require('express');
const variety = require('../models/variety');
const router = new Router();


router.get('/', async (req, res) => {
  const varietyy = await variety.findAll();
  res.json(varietyy).status(200);
});



router.get('/:id' , async (req , res) =>{
  const id = req.params.id;
  const varietyy = await variety.findOne(id);
  res.json(varietyy).status(200);
});




router.get('/minju/:ju', async (req, res) => {
  const ju = req.params.ju;
  const minJu = await variety.findByMinJuiciness(ju);
  res.json(minJu).status(200);
});

router.get('/maxju/:ju', async (req, res) => {
  const ju = req.params.ju;
  const maxJu = await variety.findByMaxJuiciness(ju);
  res.json(maxJu).status(200);
});





router.get('/minbi/:bi', async (req, res) => {
  const bi = req.params.bi;
  const minBi = await variety.findByMinBitterness(bi);
  res.json(minBi).status(200);
});




router.get('/maxbi/:bi', async (req, res) => {
  const bi = req.params.bi;
  const maxBi = await variety.findByMaxBitterness(bi);
  res.json(maxBi).status.status(200);
});




router.post('/' , async (req , res) =>{
  try {
    const request = req.body
    const varietyy = await variety.insert(req.body);
   res.json(varietyy).status(201);
  } catch(err){
    res.status(400).send(err.message)
  }
});




router.delete('/:id' , async (req , res) =>{
  try {
  const id = req.params.id;
  await variety.destroy(id);
  res.json('Data is Deleted').status(204);
  }catch {
    res.status(400).send(err.message)
  }
});




router.put('/:id', async (req , res) =>{
  try {
    const id =  req.params.id;
    const body = req.body;
    await variety.update(id , body);
    res.json('Data is succes').status(200);
  }catch{
    res.status(400).send(err.message);
  }
});





router.get('/species/:sp', async (req, res) => {
  const sp = req.params.sp;
  const speciess = await variety.findBySpecies(sp);
  res.json(speciess).status(200);
});





router.post('/scores', async (req, res) => {
  try{
    const body = req.body;
  const scores = await variety.findBetween(body);
  res.json(scores).status(201);
  }catch{
    res.status(400).send(err.message)
  };
});

module.exports = router;