import fetch from "node-fetch";
import knex from './knex.js'
import dataStruct from "./datastruct.js";
const port = 3000

// TODO
// async function inject(knex) {
//     const item = await (await fetch(`http://localhost:${port}/data/item`)).json()
//     console.log(item)
//     const data = 0
//     // Promise.all(
//     //   item.map(async (id) => await fetch(`http://localhost:${port}/data/${id}`))
//     // )
//     return data    
// }


async function dbInject(id, knex) {
  let response = await fetch(`http://localhost:${port}/data/${id}`)
  let result = await response.json()
  console.log(result)
  await knex.insert(result.map(item => dataStruct(item))).into('data')
}

dbInject(2, knex) // <- HARDCODED ID
