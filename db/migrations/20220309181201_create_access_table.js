exports.up = function up(knex) {
    return knex.schema
      .createTable('access', function (table) {
        table.increments('id');
        table.integer('user_id', 255).notNullable()
        table.integer('data_id', 255).notNullable()
      });
  }
  
  exports.down = function down(knex) {
    return knex.schema
      .dropTable('access');
  }