import fetch from "node-fetch";
import knex from './knex.js'
const port = 3000

// TODO
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
  let result = await response.json()
  console.log(result)
  await knex.insert({sensor_id: id, start_date: result[0][0], end_date: result[0][1]}).into('data')
}

dbInject(2, knex) // <- HARDCODED ID
