import express from 'express';
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import papaparse from 'papaparse';
import fse from 'fs-extra'
import path from 'path'

const app = express();
const port = 3000;
const dir = './data/input/'

app.use(bodyParser.json());

app.use('/static', express.static('data'));

// TODO
// app.get('/data/ids', (req, res) => { 
//   fetch(`http://localhost:${port}/static/${req.body.id}.csv`)
//   .then(response => response.text())
//   .then(response => papaparse.parse(response, {skipEmptyLines: true}))
//   .then(response => res.send(response))
// }
// );

app.get('/data/:id', (req, res) => { 
    fetch(`http://localhost:${port}/static/${req.params.id}.csv`)
    .then(response => response.text())
    .then(response => papaparse.parse(response, {skipEmptyLines: true}))
    .then(response => res.send(response.data))
  }
);

app.post('/post', (req, res) => {
  fse.outputFile(`${dir}${req.body.name}`, req.body.data)
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});