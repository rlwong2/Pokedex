const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');



let app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/app.js', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/dist/app.js'))
});


let port = 3000;
app.listen(port, function() {
  console.log(`Pokedex activated on port ${port}`);
});
