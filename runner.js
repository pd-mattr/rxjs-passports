var mocha = require('mocha');
var chai = require('chai');

var runner = new mocha({});

runner.addFile('./tests.js');

runner.run(failures => {
  if (failures){
    console.error(failures);
  } else {
    console.log("All passed");
  }
});