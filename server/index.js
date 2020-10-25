const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const ledRouter = require('./routes/led-router');
const db = require('./db');

// Generate express instance
const app = express();
const port = 8000;

// Attach bodyParser to express instance
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Generate routes
app.get('/', (req, res) => res.send('RPi CMS'));
app.use('/api', ledRouter);

app.listen(port, async () =>
  console.log(`\n==========\nServer running on port ${port}\n==========`)
);
