//
// This is only a SKELETON file for the 'Gigaseconds' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Gigasecond(dateOfBirth) {
  'use strict';

  this.dateOfBirth = dateOfBirth;

  this.date = function() {
    var d = new Date();
    var n = d.getMilliseconds();
    return n*1000000;
    }
         
  };
}

module.exports = Gigasecond;
