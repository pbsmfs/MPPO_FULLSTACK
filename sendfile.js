const fetch =  require('node-fetch');
const fse =  require('fs-extra');
const path =  require('path');
const { fileURLToPath } =  require('url');
const https = require('https');

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = './outer_data/'
const files = fse.readdirSync(dir)
console.log(files)

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

async function sendfile(filename) {
    let data = fse.readFileSync(path.join(__dirname, `/outer_data/${filename}`), 'utf-8')
    let datafile = {
        data,
        name: filename
    }
    await fetch(`https://localhost/post`, {
        method: 'POST',
        body: JSON.stringify(datafile),  
        headers: {
            'Content-Type': 'application/json',
            'login': 'Admin',
            'pw': 's'
        },
        agent: httpsAgent    
    })
}

files.map(file => sendfile(file))