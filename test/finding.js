const mocha=require('mocha');
const assert=require('assert');
const shawkichar=require('../models/shawkichar');
var char;
describe('Find records::',function () {

    beforeEach(function (done) {
         char=new shawkichar({
            name:'Shawki',
            weight:300
        });
        char.save().then(function () {
            done();
        });
    });
    //create Tests
    it('Finding Data to DB:', function (done) {
        shawkichar.findOne({name:'Shawki'}).then(function (result) {
           assert(result.name === 'Shawki');
           done();
        });
    });

    it('Finding Data using ID:', function (done) {
        shawkichar.findOne({_id:char._id}).then(function (result) {
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });


});
