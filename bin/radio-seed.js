const mongoose = require('mongoose');
const database = require('../configs/database.config');
const Radio = require('../models/radio-model');
const jsonFile = require('jsonfile');

const file = './bin/radios.json'

async function fetchData(file) {
    const response = await jsonFile.readFile(file)
    const data = response.radios;

    Radio.create(data)
        .then(radiosDB => {
            console.log(`Created ${radiosDB.length} radios in the database`);
        })
        .catch(error => {
            console.log(error);
        });

    return;
}

fetchData(file);

