const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  console.log('Request for home recieved');
  res.sendFile(path.join(__dirname, '/indexx.html'));
});

app.get('/about', function(req, res) {
  console.log('Request for about page recieved');
  res.sendFile(path.join(__dirname, '/aboutt.html'));
});

app.get('/contact', function(req, res) {
  console.log('Request for contact page recieved');
  res.sendFile(path.join(__dirname, '/Contactt.html'));
});
app.get('/download', function(req, res) {
    console.log('Request for contact page recieved');
    res.sendFile(path.join(__dirname, '/downloadd.html'));
  });

  app.listen(port);
  console.log('Server started at http://localhost:' + port);