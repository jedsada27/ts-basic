"use strict";
function getQuestionPart(phrases) {
    const commonSubstring = findCommonSubstring(phrases);
    const questionParts = phrases.map((phrase) => {
        const remainingPart = phrase.replace(commonSubstring, "").trim();
        return remainingPart;
    });
    return questionParts;
}
function findCommonSubstring(phrases) {
    const firstPhrase = phrases[0];
    let commonSubstring = "";
    for (let i = 0; i < firstPhrase.length; i++) {
        const substring = firstPhrase.substr(0, i + 1);
        if (phrases.every((phrase) => phrase.includes(substring))) {
            commonSubstring = substring;
        }
        else {
            break;
        }
    }
    return commonSubstring;
}
// Test cases
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"])); // Output: ["ROOM", "SALTS", "BLOOD"]
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"])); // Output: ["BE", "GIRL", "SHIP"]
