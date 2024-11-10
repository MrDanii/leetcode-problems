function isSubsequence(s: string, t: string): boolean {
  // In other word if we can iterate string "s" succesfully, it means that we got a subsequence
  let sIndex = 0
  
  for (let i = 0; i < t.length && sIndex < s.length; i++) {
    // console.log(`s[sIndex] === t[i] >>> ${s[sIndex]} === ${t[i]} ???`);
    if(s[sIndex] === t[i]) {
      sIndex++
      if (sIndex === s.length) return true
    }
  }

  return (sIndex === s.length) // this in case we consider that an empty string, is valid for any subsequence
  // return false // false if we dont consider empty string a valid solution
  // return false
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("", "ahbgdc"));
console.log(isSubsequence("aasdfvchxkjfds", ""));