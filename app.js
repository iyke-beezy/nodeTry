const express = require('express');
const http = require('http');

const app = express ();

app.use('/', (req, res) => {
    res.send('works');
})

module.exports = app;