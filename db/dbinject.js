const fetch =  require("node-fetch");
const dataStruct =  require("./datastruct.js").default;
const fse =  require('fs-extra');
const processed_dir = '../data/processed/'

exports.default = async function dbInject(id, knex, unprocessed_dir) {
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

