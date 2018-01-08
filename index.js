const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(express.static('static'));

const path = require('path');

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

const PORT = keys.PORT;
app.listen(PORT);

console.log('Server started at port: ' + PORT);
