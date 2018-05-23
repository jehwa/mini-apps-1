const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
// const converter = require('json-2-csv');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./client'));
app.get('/', (req, res) => {
    res.sendFile('./client/index.html');
});
app.post('/data', (req, res) => {
    
    let data = converter(req.body);
    // console.log(data, 'csvDATA==================');
    res.send(data);
})

let converter = function(obj) {
    let key = Object.keys(obj).filter( key => key  !== 'children' );
    //["firstName", "lastName", "county", "city", "role", "sales"]
    let value = [];
    let recursion = function(obj) {
      for(let i = 0; i < key.length; i ++) {
        value.push(obj[key[i]]);
      }
      value.push('\n');
      if(obj.children) {
        obj.children.forEach((child) => recursion(child));
      }
    }
    recursion(obj);
    key.push('\n');
    let wholeData = key.concat(value);
    let output = '';
    for(let i = 0; i < wholeData.length; i ++) {
        if(wholeData[i] === '\n' || wholeData[i+1] === '\n') {
            output += wholeData[i];
        } else {
            output += wholeData[i] + ', ';
        }
    }
    return output;
  }

app.listen(3000, () => console.log('listening port is 3000'))
