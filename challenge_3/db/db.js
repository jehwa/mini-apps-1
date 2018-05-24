const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');
let mongodb = mongoose.connection;
let customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    passWord: String,
    line1: String,
    line2: String,
    city: String, 
    state: String,
    zipCode: String,
    phoneNumber: String
});
let Customer = mongoose.model('Customer', customerSchema);

mongodb.on('error', () => console.log('there is an error in connection DB'));
mongodb.once('open', function() {
    // console.log('database is open now???????')
})

// exports.db = mongodb;
exports.db = {

    send: function(data) {
        if(!data.line1) {
            let newCustomer = new Customer(data);
            newCustomer.save(function (err, newCustomer) {
                if(err) {
                    return console.log('cannot save the data into DB');
                } else {
                    console.log(newCustomer);
                }
            })
        } else {
            let query = {
                name: data.name,
                email: data.email,
                passWord: data.passWord
            }
            Customer.findOneAndUpdate(query, data, function() {
                console.log('DB is updated!!!!');
            })
            console.log('data is ready to overwrite!!');
        }
        
        // console.log(data, 'it is in database file')
    } 

    // get: function(data) {

    // }
}