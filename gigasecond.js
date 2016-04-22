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
    var n = d.getDate()/1000;
    if ((n-dateOfBirth) == 1000000000){
      return "GS BirthDay";
    }
         
  };
}

module.exports = Gigasecond;
