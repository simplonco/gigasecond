//
// This is only a SKELETON file for the 'Gigaseconds' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Gigasecond(dateOfBirth) {
  'use strict';

  this.dateOfBirth = dateOfBirth;

  this.dateOfBirthday = function() {
    Gigasecond.prototype.date = function() {
      var anniversary = new Date(Date.parse(this.dateOfBirthday) + Math.pow(10,12))
      anniversary.setHours(0);
      anniversary.setMinutes(0);
      anniversary.setSeconds(0);
      return anniversary;
    }
  };
}

module.exports = Gigasecond;
