const jsonfile = require('jsonfile');
const fetch = require('node-fetch');

const url = 'https://teclead.de/recruiting/radios';

const file = './bin/radios.json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        jsonfile.writeFile(file, data)
            .then('Write complete')
            .catch(error => console.log(error))
    })
    .catch(error => console.log(error));