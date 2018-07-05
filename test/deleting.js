const mocha=require('mocha');
const assert=require('assert');
const shawkichar=require('../models/shawkichar');
var char;
describe('Delete records::',function () {

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
    it('Delete Data to DB:', function (done) {

        shawkichar.findOneAndRemove({name:'Shawki'}).then(function () {
            shawkichar.findOne({name:'Shawki'}).then(function (result) {
                assert(result=== null)
                done();
            })
        })
    });



});
