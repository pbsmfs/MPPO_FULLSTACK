import fetch from 'node-fetch'
import fse from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url';
import { httpsAgent } from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 3000
const dir = './outer_data/'
const files = fse.readdirSync(dir)
// console.log(files)

// files.map(file => sendfile(file))

export default async function sendfile(filename) {
    let data = fse.readFileSync(path.join(__dirname, `/outer_data/${filename}`), 'utf-8')
    let datafile = {
        data,
        name: filename
    }
    await fetch(`https://localhost:${port}/post`, {
        method: 'POST',
        body: JSON.stringify(datafile),  
        headers: {
            'Content-Type': 'application/json'
        },
        agent: httpsAgent    
    })
    // console.log(data)
    console.log(filename)
}

files.map(file => sendfile(file))