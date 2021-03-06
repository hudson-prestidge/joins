var app = require('express')()
var joins = require('./joins')
// var hbs = require('handlebars')
var exphbs = require('express-handlebars')
var path = require('path')
const PORT = 3000

app.engine('handlebars', exphbs())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
  console.log('the server is running on port ' + PORT)
})

app.get('/', function(req,res) {
  res.send('hello world!')
})

app.get('/cats', function(req, res) {
  joins.getCats()
    .then(function(data){
      var parentObject = {}
      data.map(function(cat) {
        parentObject[cat.name] = cat
      })
      res.render('cats', parentObject)
      }).catch(function(err){
      console.log(err)
    })
})

app.get('/owners', function(req, res) {
  joins.getPeople()
    .then(function(data){
    res.send(data)
    }).catch(function(err){
    console.log(err)
    })
})

app.get('/catsandowners',function (req,res){
  joins.getCatsByOwner()
    .then(function(data){
      res.send(data.map(function(cat){
        return (cat.catName + ' is owned by ' + cat.ownerName )
      }))
    })
    .catch(function(err){
      console.log(err)
    })
})
