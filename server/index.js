const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT ? process.env.PORT : 8181;

app.get('/users', (req, res) => {
  res.send([{ name: 'Luis' }, { name: 'Felipe' }]);
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.info('Express is listening on port %s.', port);
});
