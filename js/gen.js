var fs = require('fs')

fs.readdir('../images/', function(err, files) {
  files.filter(function(item) {
    return /\.(jpg|png)$/.test(item)
  }).forEach(function(item) {
    console.log('\'/images/' + item + '\',')
  })
})