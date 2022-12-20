
module.exports =  {
    client: 'pg',
    connection: {
      host : '172.18.0.2',
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

};

