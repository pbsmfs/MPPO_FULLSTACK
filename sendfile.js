const fetch =  require('node-fetch');
const fse =  require('fs-extra');
const path =  require('path');
const https = require('https');

const dir = './outer_data/'
const files = fse.readdirSync(dir)
// console.log(files)

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

exports.default = async function sendfile(filename) {
    let data = fse.readFileSync(path.join(__dirname, `/outer_data/${filename}`), 'utf-8')
    let datafile = {
        data,
        name: filename
    }
    console.log('fetch goes here')
    fse.outputFile(`./data/unprocessed/${datafile.name}`, datafile.data)

}
