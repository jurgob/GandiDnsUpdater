var express = require('express')
var fetch = require('node-fetch');

var app = express()
const PORT = 3001

app.get('/update/:ip', function (req, res) {
  fetch('https://api.github.com/users/'+req.params.ip)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        res.json({
          params:req.params,
          res:json
        })
    });

})

app.listen(PORT, function () {
  console.log('Example app listening on port localhost:'+PORT+'/update/:ip')
})