// import config from './knexfile.js'
// import knex from 'knex'
const config =  require('./knexfile.js');
const knex =  require('knex');


exports.default = knex(config)
