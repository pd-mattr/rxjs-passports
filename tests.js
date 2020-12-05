var chai = require('chai');
var passport = require('./index');
var fs = require('fs');

describe("test1", function(){
    it("finds there are four passports with the requied fields in test1", (done) => {
      fs.readFile('test1', 'utf8', (err, data) => {
        passport.part1(data.split('\n\n')).subscribe(v => chai.assert.equal(v,4));
        done();
      });
    });
    it("finds the no valid passports in test1", (done) => {
      fs.readFile('test1', 'utf8', (err, data) => {
        passport.part2(data.split('\n\n')).subscribe(v => chai.assert.equal(v,0));
        done();
      });
    });
});

describe("test2", function(){
    it("finds there are four passports with the requied fields in test2", (done) => {
      fs.readFile('test2', 'utf8', (err, data) => {
        passport.part1(data.split('\n\n')).subscribe(v => chai.assert.equal(v,4));
        done();
      });
    });
   it("finds there are four valid passports in test2", (done) => {
      fs.readFile('test2', 'utf8', (err, data) => {
        passport.part2(data.split('\n\n')).subscribe(v => chai.assert.equal(v,4));
        done();
      });
    });
});

describe("main input", function(){
    it("finds there are 264 passports with the requied fields in test3", (done) => {
      fs.readFile('test3', 'utf8', (err, data) => {
        passport.part1(data.split('\n\n')).subscribe(v => chai.assert.equal(v,264));
        done();
      });
    });
    it("finds there are 224 two valid passports in test3", (done) => {
      fs.readFile('test3', 'utf8', (err, data) => {
        passport.part2(data.split('\n\n')).subscribe(v => chai.assert.equal(v,224));
        done();
      });
    });
});