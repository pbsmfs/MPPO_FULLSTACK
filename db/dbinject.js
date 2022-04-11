import fetch from "node-fetch";
import knex from './knex.js'
import dataStruct from "./datastruct.js";
import fse from 'fs-extra'
const unprocessed_dir = '../data/unprocessed'
const processed_dir = '../data/processed'
const files = fse.readdirSync(unprocessed_dir)

console.log(files)

async function dbInject(id, knex) {
  let response = await fetch(`http://localhost/data/${id}`, {
    headers: {
      'login': 'Admin',
      'pw': 's'
    }
  } )
  let result = await response.json()
  console.log(result)
  await knex.insert(result.map(item => dataStruct(id, item))).into('data')
  fse.move(`${unprocessed_dir}/${id}.csv`, `${processed_dir}/${id}.csv`) //hardcoded file extension dropped on mapping stage
}

files.map(file => dbInject(file.slice(0, file.length - 4), knex))
