
exports.seed = async function(knex) {
  await knex('data').del()
  await knex('data').insert([
    {
      sensor_id: 1, 
      start_date: '09.12.2020 23:59:13', 
      end_date: '09.12.2020 23:59:13', 
      on_reactive_a: -600.0, 
      on_reactive_b: -1200.0,
      on_reactive_c: 0.0,
      on_active_a: 5700.0,
      on_active_b: 8700.0,
      on_active_c: 6600.0,
      on_voltage_a: 230.0,
      on_voltage_b: 230.0,
      on_voltage_c: 230.0,
      on_cos_a: -0.995,
      on_cos_b: -0.988,
      on_cos_c: 0.999,
      blocks_amount: 0
    },
    {
      sensor_id: 1, 
      start_date: '10.12.2020 00:59:26', 
      end_date: '10.12.2020 00:59:26', 
      on_reactive_a: -600.0, 
      on_reactive_b: -1500.0,
      on_reactive_c: 0.0,
      on_active_a: 5700.0,
      on_active_b: 8700.0,
      on_active_c: 7200.0,
      on_voltage_a: 230.0,
      on_voltage_b: 231.0,
      on_voltage_c: 230.0,
      on_cos_a: -0.994,
      on_cos_b: -0.986,
      on_cos_c: 0.999,
      blocks_amount: 0
    },
  ]);
};
