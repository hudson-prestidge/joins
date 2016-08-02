
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('people').insert({id: 1, name: 'Paul'}),
        knex('people').insert({id: 2, name: 'Emma'}),
        knex('people').insert({id: 3, name: 'Lara'})
      ]);
    });
};
