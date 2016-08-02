var config = require('./knexfile').development
var knex = require('knex')(config)

if (config.pool && config.pool.max !== 0) {
  this.initializePool(config);
}

function getPeople() {
  knex('people')
    .then(function(data){
      console.log('\nthese are the people:\n', data)
    })
    .catch(function(err){
      console.log(err)
    })
}

function getCats() {
   return knex('cats')
}

function getCatsByOwner() {
  return knex('people')
    .select('cats.name as catName', 'people.name as ownerName')
    .innerJoin('cats', 'people.id', 'cats.owner_id')
}

module.exports = {
  getCatsByOwner: getCatsByOwner,
  getCats: getCats,
  getPeople: getPeople
}
