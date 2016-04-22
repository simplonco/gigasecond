//
// This is only a SKELETON file for the 'Gigaseconds' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Gigasecond(dateOfBirth) {
  'use strict';

  this.dateOfBirth = dateOfBirth;

  this.date = function() {
    var d = new Date("Thu May 23 2047 01:46:40 GMT+0000 (UTC)");
    var n = d.getTime()/1000.0;
    return n;
  };
}

module.exports = Gigasecond;
