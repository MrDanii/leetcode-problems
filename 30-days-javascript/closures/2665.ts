type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): Counter {
  let curValue: number = init

  const increment = (): number => {
    return ++curValue
  }

  const decrement = (): number => {
    return --curValue
  }

  const reset = (): number => {
    return curValue = init
  }

  return {
    increment,
    decrement,
    reset
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4