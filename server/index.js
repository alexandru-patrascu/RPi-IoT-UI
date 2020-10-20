const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Generate express instance
const app = express();
const port = 8000;

// Attach bodyParser to express instance
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.listen(port, async () =>
  console.log(`\n==========\nServer running on port ${port}\n==========`)
);
