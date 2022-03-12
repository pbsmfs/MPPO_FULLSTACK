exports.up = function(knex) {
    return knex.schema
      .createTable('data', function (table) {
        table.increments('id');
        table.string('start_date')
        table.string('end_date')
        table.float('on_reactive_a')
        table.float('on_reactive_b')
        table.float('on_reactive_c')
        table.float('on_active_a')
        table.float('on_active_b')
        table.float('on_active_c')
        table.float('on_voltage_a')
        table.float('on_voltage_b')
        table.float('on_voltage_c')
        table.float('on_cos_a')
        table.float('on_cos_b')
        table.float('on_cos_c')
        table.float('off_reactive_a')
        table.float('off_reactive_b')
        table.float('off_reactive_c')
        table.float('off_active_a')
        table.float('off_active_b')
        table.float('off_active_c')
        table.float('off_voltage_a')
        table.float('off_voltage_b')
        table.float('off_voltage_c')
        table.float('off_cos_a')
        table.float('off_cos_b')
        table.float('off_cos_c')
        table.integer('blocks_amount')
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('data');
  };
