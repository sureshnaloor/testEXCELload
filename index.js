const express = require('express');
const connectDB = require('./config/db');

const app = express();

const Test = require('./models/Test');

connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (_, res) => {
  res.json({ msg: 'Hello world' });
});

app.get('/test', (req, res) => {
  Test.find().then(data => res.json(data));
});

app.post('/test', (req, res) => {
  console.log(req.body);
  //   res.send('post route');
  Test.create(req.body)
    .then(book => res.status(200).json({ msg: `book added successfully` }))
    .catch(err => res.status(400).json({ error: 'not able to load data' }));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port: ${port}`));
