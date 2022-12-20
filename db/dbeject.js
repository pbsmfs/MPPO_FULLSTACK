const knex =  require('./knex.js').default;
const fse =  require('fs-extra');
const unprocessed_dir = '../data/unprocessed'
const processed_dir = '../data/processed'
const files = fse.readdirSync(processed_dir)

// console.log(files)

async function dbEnject(id, knex) {
  await knex.where('sensor_id', id).del().from('data')
  fse.move(`${processed_dir}/${id}.csv`, `${unprocessed_dir}/${id}.csv`) //hardcoded file extension dropped on mapping stage
}

files.map(file => dbEnject(file.slice(0, file.length - 4), knex))
