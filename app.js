const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// cors middleware for security to limit the access of the api
app.use(cors());


// routes 
const users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);


app.get('/', (req, res) => {
  res.status(404).send('Not found');
});

module.exports = app;
//