export default function dataStruct(id, item) {
    let data = {
      sensor_id: id, 
      start_date: item[0], 
      end_date: item[1], 
      on_reactive_a: parseFloat(item[2]),
      on_reactive_b: parseFloat(item[3]),
      on_reactive_c: parseFloat(item[4]),
      on_active_a: parseFloat(item[5]),
      on_active_b: parseFloat(item[8]),
      on_active_c: parseFloat(item[7]),
      on_voltage_a: parseInt(item[8]),
      on_voltage_b: parseFloat(item[9]),
      on_voltage_c: parseFloat(item[10]),
      on_cos_a: parseFloat(item[11]),
      on_cos_b: parseFloat(item[12]),
      on_cos_c: parseFloat(item[13]),
      off_reactive_a: parseFloat(item[14]),
      off_reactive_b: parseFloat(item[15]),
      off_reactive_c: parseFloat(item[16]),
      off_active_a: parseFloat(item[17]),
      off_active_b: parseFloat(item[18]),
      off_active_c: parseFloat(item[19]),
      off_voltage_a: parseFloat(item[20]),
      off_voltage_b: parseFloat(item[21]),
      off_voltage_c: parseFloat(item[22]),
      off_cos_a: parseFloat(item[23]),
      off_cos_b: parseFloat(item[24]),
      off_cos_c: parseFloat(item[25]),
      blocks_amount: parseFloat(item[26])
    }
    return data
}