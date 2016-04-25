//
// This is only a SKELETON file for the 'Gigaseconds' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Gigasecond(dateOfBirth) {
  'use strict';

  this.dateOfBirth = dateOfBirth;
}

  Gigasecond.prototype.date = function() {
  var gs = Math.pow(10, 9);
  var days = Math.ceil(((gs / 60) / 60) / 24);
  var finalDate = this.birthday.setTime(this.dateOfBirthday.getTime() + days * 86400000);
  var results = new Date(finalDate);
  results.setSeconds(0);
  results.setMinutes(0);
  results.setHours(0);
  return results;
};

module.exports = Gigasecond;
