exports.up = function(knex) {
    return knex.schema
      .createTable('data', function (table) {
        table.increments('id')
        table.integer('sensor_id').notNullable()
        table.string('start_date').notNullable()
        table.string('end_date').notNullable()
        table.decimal('on_reactive_a')
        table.decimal('on_reactive_b')
        table.decimal('on_reactive_c')
        table.decimal('on_active_a')
        table.decimal('on_active_b')
        table.decimal('on_active_c')
        table.decimal('on_voltage_a')
        table.decimal('on_voltage_b')
        table.decimal('on_voltage_c')
        table.decimal('on_cos_a', 4, 3)
        table.decimal('on_cos_b', 4, 3)
        table.decimal('on_cos_c', 4, 3)
        table.decimal('off_reactive_a')
        table.decimal('off_reactive_b')
        table.decimal('off_reactive_c')
        table.decimal('off_active_a')
        table.decimal('off_active_b')
        table.decimal('off_active_c')
        table.decimal('off_voltage_a')
        table.decimal('off_voltage_b')
        table.decimal('off_voltage_c')
        table.decimal('off_cos_a', 4, 3)
        table.decimal('off_cos_b', 4, 3)
        table.decimal('off_cos_c', 4, 3)
        table.integer('blocks_amount')
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('data');
  };
