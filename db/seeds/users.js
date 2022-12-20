exports.seed = function(knex) {
  setTimeout(() => {}, 500)
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, login: 'Admin', pw: 's', isadmin: 1},
        {id: 2, login: 'testuser', pw: 123}
      ]);
    });
}