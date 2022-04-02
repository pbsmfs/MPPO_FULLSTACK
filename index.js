import express from 'express';
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import papaparse from 'papaparse';
import fse from 'fs-extra'
import knex from './db/knex.js';

const app = express();
const port = 3000;
const dir = './data/input/'

app.use(bodyParser.json());

app.use('/static', express.static('data/input'));

app.get('/data/:id', (req, res) => { 
    fetch(`http://localhost:${port}/static/${req.params.id}.csv`)
    .then(response => response.text())
    .then(response => papaparse.parse(response, {skipEmptyLines: true}))
    .then(response => res.send(response.data))
  }
);

app.use('/getsensors/:id', async (req, res) => {
    await knex('data').select().where('sensor_id', req.params.id)
    .then(response => res.send(response))
  }
)

app.post('/post', (req, res) => {
  fse.outputFile(`${dir}${req.body.name}`, req.body.data)
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});