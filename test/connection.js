const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise=global.Promise;
//before hooks to get notified when connection created.
before(function (done) {
    mongoose.connect('mongodb://localhost/test');

    mongoose.connection.once('open',function () {
        console.log("connnect");
        done();
    }).on('error',function (error) {
        console.log('error', error);
    });
});

beforeEach(function (done) {

    mongoose.connection.collections.shawkidbs.drop(function () {
        done();
    })
});