const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const WebScrapperRouter = require('./routes/WebScrapperRouter');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/nasa', WebScrapperRouter);
module.exports = app;
