const mocha=require('mocha');
const assert=require('assert');
const shawkichar=require('../models/shawkichar');

describe('saving records::',function () {
   //create Tests
    it('Saving Data to DB:', function (done) {
        var char=new shawkichar({
           name:'Shawki',
            weight:300
        });
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });

    });


});

