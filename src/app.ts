function getClockAngle(hh_mm: string): number {
    const [hour, minute] = hh_mm.split(":").map(Number);
    const hourAngle: number = (hour % 12) * 30 + minute * 0.5;
    const minuteAngle: number = minute * 6;
        let angleDiff: number = Math.abs(hourAngle - minuteAngle);
        if (angleDiff > 180) {
        angleDiff = 360 - angleDiff;
    }
    
    return angleDiff;
}

// Test cases
console.log(getClockAngle("09:00"));  // Output: 90
console.log(getClockAngle("17:30"));  // Output: 15

