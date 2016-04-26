//
// This is only a SKELETON file for the 'Gigaseconds' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Gigasecond(dateOfBirth) {
  this.dateOfBirthday = dateOfBirth;
}

this.date = function() {
  var anniversary = new Date(Date.parse(this.dateOfBirthday))
  anniversary.setHours(10);
  anniversary.setMinutes(20);
  anniversary.setSeconds(60);
  return anniversary;
}

module.exports = Gigasecond;
