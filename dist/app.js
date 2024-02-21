"use strict";
function getClockAngle(hh_mm) {
    const [hour, minute] = hh_mm.split(":").map(Number);
    const hourAngle = (hour % 12) * 30 + minute * 0.5;
    const minuteAngle = minute * 6;
    let angleDiff = Math.abs(hourAngle - minuteAngle);
    if (angleDiff > 180) {
        angleDiff = 360 - angleDiff;
    }
    return angleDiff;
}
// Test cases
console.log(getClockAngle("09:00")); // Output: 90
console.log(getClockAngle("17:30")); // Output: 15
