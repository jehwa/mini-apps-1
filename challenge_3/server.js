const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/f1', (req, res) => {
    console.log(req.body);
    res.end();
})

app.listen(3000, () => console.log('listening on port 3000'))