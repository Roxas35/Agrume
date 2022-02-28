require('dotenv').config();
const express = require('express');
const app = express();

const db = require('./models/db');


const species = require('./models/species');
const variety = require('./models/variety');



app.use(express.json());

species.findAll().then(console.table);
variety.findAll().then(console.table);


const port = 9000;
app.listen(port, () => console.log(`Server listening on port ${port}`));