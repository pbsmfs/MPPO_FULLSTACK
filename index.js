import express from 'express';
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import papaparse from 'papaparse';
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/static', express.static('data'));

app.get('/data/:id', (req, res) => { 
    fetch(`http://localhost:${port}/static/${req.body.id}.csv`)
    .then(response => response.text())
    .then(response => papaparse.parse(response, {skipEmptyLines: true}))
    .then(response => res.send(response))
    /*
    TODO
    data inserting to db
    */
  }
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});