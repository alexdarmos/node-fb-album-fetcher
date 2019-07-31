const express = require('express');
//Get request
const app = express();
const cors = require('cors');
//allows us to use data in json format
// app.use(express.json());
app.use(cors());

// server.js, any file with a created and configured Express app
// app.use(express.static('./public'));

const albums = require('./album');
app.use('/get-photos', albums);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
