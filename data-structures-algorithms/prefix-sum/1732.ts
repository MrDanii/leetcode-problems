function largestAltitude(gain: number[]): number {
  let netGain: number = 0 // starting position 0
  let highestAltitude: number = 0

  for (let i = 0; i < gain.length; i++) {
    netGain = (netGain + gain[i])
    if (netGain > highestAltitude) highestAltitude = netGain
  }

  return highestAltitude
};

// console.log(largestAltitude([-5,1,5,0,-7]))
// console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))
// console.log(largestAltitude([-7]))
// console.log(largestAltitude([0]))
// console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))
