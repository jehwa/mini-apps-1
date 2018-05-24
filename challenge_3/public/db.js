'use strict';

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// let db = mongoose.connection;

exports.db = {
    send: function send(data) {
        // mongoose.connect('mongodb://localhost/mydb')
        // let dbdata = mongoose.Schema(data);
        // db.on('err', console.log(err));
        // db.once('open', function(){
        //     console.log('database is open now???????')

        // })
        console.log(data, 'it is in database file');
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9kYi5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJleHBvcnRzIiwiZGIiLCJzZW5kIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCO0FBQ0E7QUFDQTs7QUFFQUMsUUFBUUMsRUFBUixHQUFhO0FBQ1RDLFVBQU0sY0FBU0MsSUFBVCxFQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBWixFQUFrQix3QkFBbEI7QUFDSDtBQVZRLENBQWIiLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG4vLyBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L3Rlc3QnKTtcbi8vIGxldCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5cbmV4cG9ydHMuZGIgPSB7XG4gICAgc2VuZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L215ZGInKVxuICAgICAgICAvLyBsZXQgZGJkYXRhID0gbW9uZ29vc2UuU2NoZW1hKGRhdGEpO1xuICAgICAgICAvLyBkYi5vbignZXJyJywgY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIC8vIGRiLm9uY2UoJ29wZW4nLCBmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2RhdGFiYXNlIGlzIG9wZW4gbm93Pz8/Pz8/PycpXG5cbiAgICAgICAgLy8gfSlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgJ2l0IGlzIGluIGRhdGFiYXNlIGZpbGUnKVxuICAgIH1cbn0iXX0=