exports.up = function(knex) {
    return knex.schema
      .createTable('users', function (table) {
        table.increments('id');
        table.string('pw', 255).notNullable();
        table.string('login', 255).notNullable().unique()
        table.boolean('isadmin').defaultTo(0)
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('users');
  };