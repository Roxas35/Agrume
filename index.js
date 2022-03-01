require('dotenv').config();
const express = require('express');
const app = express();
const species = require('./models/species');
const variety = require('./models/variety');

const RouterSpecies = require('./routers/species');
const RouterVariety = require('./routers/variety');

app.use(express.json());


app.use('/species', RouterSpecies);

app.use('/variety', RouterVariety);

species.findAll().then(console.table);

variety.findAll().then(console.table);


const port = 9000;
app.listen(port, () => console.log(`Server listening on port ${port}`));