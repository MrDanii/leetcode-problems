type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {

  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId)
        reject('Time Limit Exceeded')
      }, t)

      // fn(...args)
      //   .then((res) => {
      //     clearTimeout(timeoutId)
      //     resolve(res)
      //   })
        // .catch((error) => {
        //   clearTimeout(timeoutId)
        //   reject(error)
        // })

      // shorter way to call fn
      fn(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => clearTimeout(timeoutId))
    })
  }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100)
limited(150).catch(console.log)
limited(50).then(console.log)