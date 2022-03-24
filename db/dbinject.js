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
  let data = {
    sensor_id: id, 
    start_date: result[0][0], 
    end_date: result[0][1], 
    on_reactive_a: parseFloat(result[0][2]),
    on_reactive_b: parseFloat(result[0][3]),
    on_reactive_c: parseFloat(result[0][4]),
    on_active_a: parseFloat(result[0][5]),
    on_active_b: parseFloat(result[0][6]),
    on_active_c: parseFloat(result[0][7]),
    on_voltage_a: parseInt(result[0][8]),
    on_voltage_b: parseFloat(result[0][9]),
    on_voltage_c: parseFloat(result[0][10]),
    on_cos_a: parseFloat(result[0][11]),
    on_cos_b: parseFloat(result[0][12]),
    on_cos_c: parseFloat(result[0][13]),
    off_reactive_a: parseFloat(result[0][14]),
    off_reactive_b: parseFloat(result[0][15]),
    off_reactive_c: parseFloat(result[0][16]),
    off_active_a: parseFloat(result[0][17]),
    off_active_b: parseFloat(result[0][18]),
    off_active_c: parseFloat(result[0][19]),
    off_voltage_a: parseFloat(result[0][20]),
    off_voltage_b: parseFloat(result[0][21]),
    off_voltage_c: parseFloat(result[0][22]),
    off_cos_a: parseFloat(result[0][23]),
    off_cos_b: parseFloat(result[0][24]),
    off_cos_c: parseFloat(result[0][25]),
    blocks_amount: parseFloat(result[0][26])

  }
  await knex.insert(data).into('data')
}

dbInject(2, knex) // <- HARDCODED ID
