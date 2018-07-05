const mocha=require('mocha');
const assert=require('assert');
const shawkichar=require('../models/shawkichar');
var char;
describe('Update records::',function () {

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
    it('Update Data to DB:', function (done) {

        shawkichar.findOneAndUpdate({name:'Shawki'},{name:'Sabeen Kamal'}).then(function () {
          shawkichar.findOne({_id:char._id}).then(function (result) {
              assert(result.name==='Sabeen Kamal')
              done();
          });
        });
    });

    it('Update Weight to DB:', function (done) {

        shawkichar.update({}, {$inc:{weight:1}}).then(function () {
            shawkichar.findOne({name:'Shawki'}).then(function (record) {
                assert(record.weight===301);
                done();
            })
        })

    });



});
