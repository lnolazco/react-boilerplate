const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT ? process.env.PORT : 8181;

const fileName = './server/data.json';

app.get('/users', (req, res) => {
  fs.readFile(fileName, 'utf8', (error, contents) => {
    if (error) {
      res.send(error);
    }
    res.send(JSON.parse(contents));
  });
});

app.post('/users', (req, res) => {
  console.log('users post body', req.body);
  fs.readFile(fileName, 'utf8', (err, contents) => {
    const users = JSON.parse(contents);
    const user = users.find(({ id }) => id === req.body.id);
    console.log('user: ', user);
    user.firstname = req.body.firstname;
    user.surname = req.body.surname;
    fs.writeFile(fileName, JSON.stringify(users), (err) => {
      console.log('done', err);
    });
    res.send('ok');
  });
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.info('Express is listening on port %s.', port);
});
