
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'Maknoon', owner_id: 2}),
        knex('cats').insert({id: 2, name: 'Shadow', owner_id: 3}),
        knex('cats').insert({id: 3, name: 'Mila', owner_id: 1}),
        knex('cats').insert({id: 4, name: 'Monty', owner_id: 3}),
        knex('cats').insert({id: 5, name: 'GhostCat', owner_id: 4})
      ]);
    });
};
