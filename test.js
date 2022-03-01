require('dotenv').config();
const { TestWatcher } = require('jest');
const species = require('./models/species');
const variety = require('./models/variety');


test('the data is test', async () => {
    const speciess = await species.findAll(db =>{
        jest.setTimeout(50000);
        expect(speciess)
    });
});
/*
test('the data is test', async () => {

    const object = {
        "scientific": "orange",
        "vernacular": "citron",
        "family_id" : "pamplemousse"
    };
    const speciess = await species.insert(object);
        jest.setTimeout(50000);
        expect(speciess)
});
*/
/*
test('the data is test', async () => {

    const id = 17;
    const object = {
        "scientific": "fruit",
        "vernacular": "fruit",
        "family_id" : "kumquat"
    };
    const speciess = await species.update(id, object);
        jest.setTimeout(50000);
        expect(speciess)
});
*/
test('the data is test', async () => {
    const speciess= await species.destroy(25);
    jest.setTimeout(50000);
    expect(speciess)
});





