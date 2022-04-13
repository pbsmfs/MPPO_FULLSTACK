import express from 'express';
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import papaparse from 'papaparse';
import fse from 'fs-extra'
import knex from './db/knex.js';
import * as https from 'https'
import * as http from 'http'
import auth from './auth.js';
import cors from 'cors'

const app = express();
const dir = './data/unprocessed/'
const key = fse.readFileSync('./certificates/key.pem')
const cert = fse.readFileSync('./certificates/cert.pem')
const server = http.createServer(app)
const httpsserver = https.createServer({key, cert}, app)

server.listen(80, () => {
  console.log(`Example app listening at http://localhost`);
});

httpsserver.listen(443, () => {
  console.log(`Example app listening at https://localhost`);
})

app.use(cors())

app.use(bodyParser.json());

app.use('/static', express.static(`${dir}`));

app.get('/data/:id', async (req, res) => {
  let auth_check = await auth(req.get('login'), req.get('pw'))
  auth_check === 'ok'  ?  
    fetch(`http://localhost/static/${req.params.id}.csv`)
    .then(response => response.text())
    .then(response => papaparse.parse(response, {skipEmptyLines: true}))
    .then(response => res.send(response.data))
    .then(console.log(auth_check)) 
    : 
    res.status(401).send('unauthorized')
  }
);

app.use('/getsensors/:id', async (req, res) => {
  let auth_check = await auth(req.get('login'), req.get('pw'))
  auth_check === 'ok'  ?
    await knex('data').select().where('sensor_id', req.params.id)
    .then(response => res.send(response))
    : res.status(401).send('unauthorized')
  } 
)

app.post('/post', async (req, res) => {
  let auth_check = await auth(req.get('login'), req.get('pw'))
  auth_check === 'ok'  ?
    fse.outputFile(`${dir}${req.body.name}`, req.body.data)
  : res.status(401).send('unauthorized')
})

app.post('/createuser', async (req, res) => {
  let auth_check = await auth(req.get('login'), req.get('pw'))
  auth_check === 'ok'  ?
    await knex
    .insert({
      login: req.body.login,
      pw: req.body.pw,
    }).into('users')
    .then(res.send('user created'))
  : res.status(401).send('unauthorized')
})

app.post('/useraccess', async (req, res) => {
  let auth_check = await auth(req.get('login'), req.get('pw'))
  if (auth_check === 'ok')  {
    req.body.data_id.map(async id => await knex
      .insert({
          user_id: req.body.user_id,
          data_id: id
        }).into('access')
      )
    res.status(200).send('access granted')
  }   
  else{
    res.status(401).send('unauthorized')
  } 

})

app.delete('/useraccess', async (req, res) => {
  let auth_check = await auth(req.get('login'), req.get('pw'))
  if (auth_check === 'ok')  {
    req.body.data_id.map(async data_id => await knex
      .where('data_id', data_id)
      .where('user_id', req.body.user_id)
      .del()
      .from('access')
      )
    res.send('access updated')
    }
  else {
    res.status(401).send('unauthorized')
  }
})

app.get('/getaccessed', async (req, res) => {
  let auth_check = await auth(req.get('login'), req.get('pw'))
  console.log(auth_check)
  if (auth_check === 'ok')  {
    let user_data = await knex.select('id').where('login', req.get('login')).from('users')
    let accessed = await knex.select('data_id').where('user_id', user_data[0].id).from('access')
    res.send(accessed)
    }
  else {
    res.status(401).send('unauthorized')
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

