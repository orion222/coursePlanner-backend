
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

var corsOptions = {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE'
}

app.use(cors(corsOptions));

const courseRouter = require('./routes/course');

app.use("/course", courseRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
