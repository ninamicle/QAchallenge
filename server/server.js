const express = require('express');
const fs = require('fs');
const PORT = 4000;
const app = express();

app.get('/list', (req, res) => {
  fs.readFile('./db/list.json', 'utf8', function(err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
