const db = require('./db');

const findAll = async () => {
    return await db('variety').select('variety.id', 'cultivar', 'juiciness', 'bitterness', 'scientific', 'vernacular', 'family_id').join('species', function() {
      this.on('species.id', '=', 'variety.species_id');
    }).orderBy('variety.id');
  }
  
module.exports = { findAll };



