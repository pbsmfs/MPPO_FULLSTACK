import fetch from "node-fetch";
const port = 3000
import knex from "knex";

async function inject(knex, id) {
    await fetch(`http://localhost:${port}/data/${id}`)
    .then(response => function () {
        // return knex('data').insert(
        //   response.data.map(sensor => {{start_date: sensor.start_date}})
        // )
        // console.log(response)
        // return response.data.map(sensor => knex('data').insert([{start_date: sensor.start_date}]))
      })
}

inject(knex, 1)