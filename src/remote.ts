function getQuestionPart(phrases: string[]): string[] {
  const commonSubstring: string = findCommonSubstring(phrases);
  const questionParts: string[] = phrases.map((phrase) => {
    const remainingPart: string = phrase.replace(commonSubstring, "").trim();
    return remainingPart;
  });

  return questionParts;
}

function findCommonSubstring(phrases: string[]): string {
  const firstPhrase: string = phrases[0];
  let commonSubstring: string = "";

  for (let i: number = 0; i < firstPhrase.length; i++) {
    const substring: string = firstPhrase.substr(0, i + 1);
    if (phrases.every((phrase) => phrase.includes(substring))) {
      commonSubstring = substring;
    } else {
      break;
    }
  }

  return commonSubstring;
}

// Test cases
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"])); // Output: ["ROOM", "SALTS", "BLOOD"]
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"])); // Output: ["BE", "GIRL", "SHIP"]
