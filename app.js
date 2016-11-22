var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
/*initializing the variable for the server*/
var app = express()

app.get('/', function(req, res){
    res.send('Hello World')
})

app.listen(3000,function(){ 
    console.log('server running on port 3000')
})