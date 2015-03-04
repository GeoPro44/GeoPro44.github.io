var express = require('express');
var http = require('http');
var path = require('path');

// 4.0 stuff
var morgan = require('morgan');
var multipart = require('connect-multiparty');

/*var databaseUrl = "testDB";
var collections = ["users"]
var db = require("mongojs").connect(databaseUrl, collections);*/

var app = express();

//var multipartMiddleware = multipart();
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res) {
  res.sendfile("index.html");
});

/*app.get('/api/users', api.GetUsers(db));
app.post('/api/users', api.AddUser(db));*/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
