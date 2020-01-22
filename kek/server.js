const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/kek'));

app.get('/*', function(req, res) {
  res.send(path.join(__dirname + '/dist/kek/index.html'));
});

app.listen(process.env.PORT || 3000);
