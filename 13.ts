function romanToInt(s: string): number {
  let num: number = 0
  let prevNumber: number = 0

  const romanHash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

  for (let i = s.length - 1; i >= 0; i--) {
    const curValue: number = romanHash[s.charAt(i)]
    num += (prevNumber > curValue) ? - curValue : curValue;
    prevNumber = curValue
  }

  return num;
};



// Example 1:
// Input: s = "III"
// Output: 3
console.log(romanToInt('III'));

// Example 2:
// Input: s = "LVIII"
// Output: 58
console.log(romanToInt('LVIII'));

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
console.log(romanToInt('MCMXCIV'));

// Custom:
// Input: s = "MMMCMXCIX"
// Output: 1994
console.log(romanToInt('MMMCMXCIX'));