var app = require('express')()
var joins = require('./joins')
const PORT = 3000

app.listen(PORT, function() {
  console.log('the server is running on port ' + PORT)
})

app.get('/', function(req,res) {
  res.send('hello world!')
})

app.get('/cats', function(req, res) {
  joins.getCats()
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
