const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');

require('dotenv').config();

const fameCutoffRoute = require('./routes/cutoff.routes');
const moeRoute = require('./routes/moe.routes');

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/fame', fameCutoffRoute);
app.use('/get', moeRoute);

const server = http.createServer(app);

mongoose.connect(uri, {});

app.listen(process.env.PORT, () =>
  console.log(`MongoDB listening at port: ${port}`)
);

server.listen(4001, () => {
  console.log('Socket listening at port: 4001');
});

module.exports = app;