const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());

app.get('/api/envs', (req, res) => {
  res.send({ 'process.env': process.env });
});

require('./routes/emailRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(keys.PORT);

console.log('Server started at port: ' + keys.PORT);
