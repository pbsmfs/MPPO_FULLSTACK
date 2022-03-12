const path = require('path');
// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 's',
      database : 'postgres'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:  './migrations'
    },
    useNullAsDefault: true
  }

};