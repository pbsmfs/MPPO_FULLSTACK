import express from 'express';
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import papaparse from 'papaparse';
import fse from 'fs-extra'
import knex from './db/knex.js';
import https from 'https'

const app = express();
const port = 3000;
const dir = './data/input/'
const key = fse.readFileSync('C:/Users/user/key.pem')
const cert = fse.readFileSync('C:/Users/user/cert.pem')
const server = https.createServer({key, cert}, app)


app.use(bodyParser.json());

app.use('/static', express.static('data/input'));

app.get('/data/:id', (req, res) => { 
    fetch(`https://localhost:${port}/static/${req.params.id}.csv`)
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

app.post('/createuser', async (req, res) => {
  await knex
  .insert({
    login: req.body.login,
    pw: req.body.pw,
  }).into('users')
  .then(res.send('user created'))
})

app.post('/useraccess', async (req, res) => {
  req.body.data_id.map(async id => await knex
    .insert({
        user_id: req.body.user_id,
        data_id: id
      }).into('access')
    )
  res.send('access granted')
})

app.delete('/useraccess', async (req, res) => {
  req.body.data_id.map(async id => await knex
    .where('data_id', id)
    .del()
    .from('access')
    )
  res.send('access updated')
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});

export const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});