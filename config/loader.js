const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nlp = require('../modules/nlp');
const mongo = require('./db');

const initialize = async () => {
    await nlp.initialize();
    await mongo.init();
    app.use(bodyParser.json());
    console.log(app)
    return app;
}

module.exports = {
    initialize
}