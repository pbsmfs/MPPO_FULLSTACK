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

  function dataStruct(ids) {
    let data = {
      sensor_id: id, 
      start_date: ids[0], 
      end_date: ids[1], 
      on_reactive_a: parseFloat(ids[2]),
      on_reactive_b: parseFloat(ids[3]),
      on_reactive_c: parseFloat(ids[4]),
      on_active_a: parseFloat(ids[5]),
      on_active_b: parseFloat(ids[8]),
      on_active_c: parseFloat(ids[7]),
      on_voltage_a: parseInt(ids[8]),
      on_voltage_b: parseFloat(ids[9]),
      on_voltage_c: parseFloat(ids[10]),
      on_cos_a: parseFloat(ids[11]),
      on_cos_b: parseFloat(ids[12]),
      on_cos_c: parseFloat(ids[13]),
      off_reactive_a: parseFloat(ids[14]),
      off_reactive_b: parseFloat(ids[15]),
      off_reactive_c: parseFloat(ids[16]),
      off_active_a: parseFloat(ids[17]),
      off_active_b: parseFloat(ids[18]),
      off_active_c: parseFloat(ids[19]),
      off_voltage_a: parseFloat(ids[20]),
      off_voltage_b: parseFloat(ids[21]),
      off_voltage_c: parseFloat(ids[22]),
      off_cos_a: parseFloat(ids[23]),
      off_cos_b: parseFloat(ids[24]),
      off_cos_c: parseFloat(ids[25]),
      blocks_amount: parseFloat(result[0][26])
    }
    return data
  }
  await knex.insert(result.map(item => dataStruct(item))).into('data')
}

dbInject(2, knex) // <- HARDCODED ID
