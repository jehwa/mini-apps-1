const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

let db = require(__dirname + '/db/db');
// const MongoClient = require('mongodb').MongoClient
app.use(express.static('db'));
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/f1', (req, res) => {
    // console.log(req.body);
    db.db.send(req.body);
    res.end();
})

app.listen(3000, () => console.log('listening on port 3000'))