import fetch from "node-fetch";
import knex from './knex.js'
import dataStruct from "./datastruct.js";
import fse from 'fs-extra'
const port = 3000
const dir = '../data/input'
const files = fse.readdirSync(dir)
console.log(files)

async function dbInject(id, knex) {
  let response = await fetch(`https://localhost:${port}/data/${id}`)
  let result = await response.json()
  console.log(result)
  await knex.insert(result.map(item => dataStruct(id, item))).into('data')
}

files.map(file => dbInject(file.slice(0, file.length - 4), knex))
