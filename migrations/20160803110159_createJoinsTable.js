
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('joins', function(table) {
    table.increments('id')
    table.string('ownerId').references('people.id')
    table.string('catId').references('cats.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('joins')
};
