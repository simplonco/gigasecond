//
// This is only a SKELETON file for the 'Gigaseconds' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Gigasecond(dateOfBirth) {
    'use strict';

    this.dateOfBirth = dateOfBirth;

    this.date = function() {
        var gigasecondDate = new Date(dateOfBirth.getTime() + 1000000000000);
        gigasecondDate.setSeconds(0);
        gigasecondDate.setMinutes(0);
        gigasecondDate.setHours(0);
        return gigasecondDate;
    };
}

module.exports = Gigasecond;
