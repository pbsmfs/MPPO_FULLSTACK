export function up(knex) {
    return knex.schema
      .createTable('access', function (table) {
        table.increments('id');
        table.integer('user_id', 255).notNullable()
        table.integer('data_id', 255).notNullable()
      });
  }
  
  export function down(knex) {
    return knex.schema
      .dropTable('access');
  }