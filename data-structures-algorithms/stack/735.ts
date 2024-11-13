function asteroidCollision(asteroids: number[]): number[] {
  let asteroidsStack: number[] = []

  asteroids.forEach((asteroid) => {
    let currentAsteroid: number = asteroid

    // Last element from our stack must be positive, and currentAsteroid must be negative,
    //  in other words, if we have positive and negative theres a collision
    while ((asteroidsStack.length > 0) && (asteroidsStack[asteroidsStack.length - 1] > 0) && currentAsteroid < 0) {
      let prevAsteroid = asteroidsStack.pop()!
      if ((prevAsteroid + currentAsteroid) == 0) {
        currentAsteroid = 0
      } else {
        currentAsteroid = (prevAsteroid + currentAsteroid > 0) ? prevAsteroid: currentAsteroid
      }
    }

    // Be careful with this condition, 
    // if condition is (currentAsteroid > 0) this means that asteroids are in the same orbit
    // if condition is (currentAsteroid != 0) this means that asteroids are in the same row
    //      this imply that all negatives to the left, will never be destroyed. 
    //      For example in case [-4,-3,-2,-1,10,-5] only -5 is destroyed
    if (currentAsteroid != 0) {
      asteroidsStack.push(currentAsteroid)
    }
  })

  return asteroidsStack
};


// Input: asteroids = [5,10,-5, 3, -3]
// Output: [5, 10]
// console.log(asteroidCollision([5,10,-5, 3, -3]));
// console.log(asteroidCollision([8,-8]));
// console.log(asteroidCollision([10,2,-5]));
console.log(asteroidCollision([-2,-1,1,2]));