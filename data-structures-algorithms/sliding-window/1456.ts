function maxVowels(s: string, k: number): number {
  let wasStartVowel: boolean = isVowel(s.charAt(0))
  let maxVowels: number = 0
  // We count initial vowels in our range from "0" to "k"
  let vowelsCounter: number = 0
  for (let i = 0; i < k; i++) {
    if (isVowel(s.charAt(i))) {
      vowelsCounter++
      maxVowels = vowelsCounter
    }
  }
  if (vowelsCounter === k) return k // if we count the maximum amount of vowel possible in "k"

  for (let i = 1; i < s.length - k + 1; i++) {
    // in case our last character was a vowel, we need to decrement, since we are moving our index
    if (wasStartVowel) vowelsCounter--; 
    wasStartVowel = isVowel(s.charAt(i))  // we update our flag

    // we increment vowelsCounter in case next element is a vowel
    if (isVowel(s.charAt(i + k - 1))) vowelsCounter++
    if (vowelsCounter > maxVowels) maxVowels = vowelsCounter
    if (vowelsCounter === k) return k
  }

  return maxVowels
};

function isVowel(s: string) {
  return s.charAt(0) === 'a' || s.charAt(0) === 'e' || s.charAt(0) === 'i' || s.charAt(0) === 'o' || s.charAt(0) === 'u'
}

// console.log(maxVowels("abciiidef", 3));
// console.log(maxVowels("aeiou", 2));
// console.log(maxVowels("leetcode", 3));
// console.log(maxVowels("zpuerktejfp", 3));