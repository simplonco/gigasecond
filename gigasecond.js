//
// This is only a SKELETON file for the 'Gigaseconds' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Gigasecond(birthday) {
  this.birthday = new Date(birthday);
}

Gigasecond.prototype.date = function() {
  b = new Date(this.birthday.setSeconds(this.birthday.getSeconds() + 1000000000 ));
  return new Date(b.getFullYear(), b.getMonth(), b.getDate());
};

module.exports = Gigasecond;;
