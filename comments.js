// create web server
// create a web server
const express = require('express');
const app = express();
//const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
//const { Pool } = require('pg');
//const pool = new Pool({
//  connectionString: process.env.DATABASE_URL,
//  ssl: true
//});
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));
app.post('/comments', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//app.listen(process.env.PORT || 3000, function(){
//  console.log('Your node js server is running');
//});
