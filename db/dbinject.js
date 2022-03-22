import fetch from "node-fetch";
import knex from './knex.js'
const port = 3000
// async function inject(knex) {
//     const ids = await (await fetch(`http://localhost:${port}/data/ids`)).json()
//     console.log(ids)
//     const data = 0
//     // Promise.all(
//     //   ids.map(async (id) => await fetch(`http://localhost:${port}/data/${id}`))
//     // )
//     return data
    
// }

// inject()
// .then(data => {console.log(data)})

async function dbInject(id, knex) {
  let response = await fetch(`http://localhost:${port}/data/${id}`)
  console.log(response.body)
  // knex('data').insert({start_date: data.body.data[0][0]})
}

dbInject(2, knex)
