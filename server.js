const express = require('express');
const app = express();
const port = 3000;

const person = {
  name: 'jon',
  lastName: 'doe',
  age: 44,
 }

app.get('/', (req, res) => {
  res.send(person)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


