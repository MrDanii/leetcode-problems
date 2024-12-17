type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
  let timeoutIdRef
  
  return function (...args) {
    clearTimeout(timeoutIdRef)
    timeoutIdRef = setTimeout(() => {
      fn(...args)
    }, t)
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */