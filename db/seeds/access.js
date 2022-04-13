export function seed(knex) {
    return knex('access').del()
      .then(function () {
        return knex('access').insert([
          {id: 1, user_id: 2, data_id: 1607625724},
          {id: 2, user_id: 2, data_id: 1608400249},
          {id: 3, user_id: 2, data_id: 1608313526},
        ]);
      });
  }