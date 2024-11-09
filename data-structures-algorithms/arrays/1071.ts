function gcdOfStrings(str1: string, str2: string): string {
  let str2CurrentLength = str2.length  // str2 divides str1

  // we iterate str2 until, str1 and str2 have a common divisor (we iterate from ending because we are looking for greatest common divisor)
  for (let indexStr2 = str2.length - 1; indexStr2 >= 0; indexStr2--) {

    if (str1.length % str2CurrentLength === 0 && str2.length % str2CurrentLength === 0) {
      // we create the string that will divide our strings
      let stringToCompare = str2.substring(0, str2CurrentLength)
      // Note: If we split by the stringToCompare, and all elements are empty, it means that we find gcd in the string
      let isStr1Gcd: number = str1.split(stringToCompare).findIndex((value) => value != "")
      let isStr2Gcd: number = str2.split(stringToCompare).findIndex((value) => value != "")
      if (isStr1Gcd < 0 && isStr2Gcd < 0) return stringToCompare

    } else {
      str2CurrentLength--
    }
  }

  return ""
};

// console.log(gcdOfStrings("ABABABABABAB", "ABABAB"))
// console.log(gcdOfStrings("ABCABC", "ABC"))
// console.log(gcdOfStrings("ABABAB", "ABAB"))
// console.log(gcdOfStrings("LEET", "CODE"))
