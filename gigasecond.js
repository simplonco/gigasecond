//
// This is only a SKELETON file for the 'Gigaseconds' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Gigasecond(dateOfBirth) {
    'use strict';

    this.dateOfBirth = dateOfBirth;

    this.date = function() {
        Gigasecond.prototype.date = function() {
            var birthSeconds = this.dateOfBirth.getTime();
            var seconds = birthSeconds + 1000000000000;
            var result = new Date(seconds);
            result.setHours(0);
            result.setMinutes(0);
            result.setSeconds(0);
            result.setMilliseconds(0);
            return result;
        }
    };
}

module.exports = Gigasecond;
