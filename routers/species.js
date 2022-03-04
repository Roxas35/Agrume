const { Router } = require('express');
const species = require('../models/species');
const router = new Router();



router.get('/', async (req, res) => {
  const speciess = await species.findAll();
  res.json(speciess).status(200);
});


router.get('/:id' , async (req , res) =>{
  const id = req.params.id;
  const speciess = await species.findOne(id);
  res.json(speciess).status(200);
});



router.post('/' , async (req , res) =>{

  try{
  const speciess = await species.insert(req.body)
  res.json(speciess).status(201);
  }catch(err){
    res.status(400).send(err.message)
  }
});



router.delete('/:id' , async (req , res) =>{

  try {
    const id = req.params.id;
  await species.destroy(id);
  res.json('succes delete').status(204)
  }catch(err){
    res.status(400).send(err.message)
  };
});




router.put('/:id', async (req , res) =>{

  try {
    const id =  req.params.id;
    const body = req.body;
    await species.update(id , body);
    res.json('data is succes').status(200);
  }catch(err){
    res.status(400).send(err.message)
  }  
});




router.get('/family/:fa', async (req, res) => {
  const fa = req.params.fa;
  const family = await species.findByFamily(fa);
  res.json(family).status(200);
});

module.exports = router;
