const assert=require('assert');
const mongoose =require('mongoose');
const author=require('../models/author');


describe('Nesting record', function () {

    it('new author', function (done) {
       var char = new author({
            name: 'Shawki',
            books: [{title: 'Harrt Porter', pages: 20}]
        });

        char.save().then(function () {

            author.findOne({name: 'Shawki'}).then(function (results) {
                assert(results.books.length === 1);
                done();
            });

        });
    });
    // it('new book of shawki',function (done) {
    //     var char = new author({
    //         name: 'Shawki',
    //         books: [{title: 'GGOOOTT', pages: 290}]
    //     });
    //     char.save().then(function () {
    //       author.findOne({name:'Shawki'}).then(function (record) {
    //           record.books.push({title:'Life of Pie',pages:100});
    //           record.save().then(function (result) {
    //               assert(result.books.length===2);
    //               done();
    //           });
    //       });
    //     });
    //
    // });
    it('Adds a book to an author', function(done){

        var pat = new author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){
            author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                // add a book to the books collection
                record.books.push({title: "Wise Man's Fear", pages: 500});
                record.save().then(function(){
                    author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                        assert(record.books.length === 2);
                        done();
                    });
                });
            });
        });

    });


});