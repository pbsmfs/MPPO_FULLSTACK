const fse = require('fs-extra')
const sendfile = require('./sendfile.js').default
const dbinject = require('./db/dbinject.js').default
const knex = require('./db/knex.js').default;

const out_dir = './outer_data/'
const dir = './data/unprocessed/'
const out_files = fse.readdirSync(out_dir)

out_files.map(file => sendfile(file))



module.exports = function loadSetup() {
    let unp_files = fse.readdirSync(dir)
    console.log(unp_files)
    unp_files.map(file => dbinject(file.slice(0, file.length - 4), knex, dir))
}
