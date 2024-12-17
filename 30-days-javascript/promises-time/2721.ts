type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {

  return new Promise((resolve, reject) => {
    let promisesArr = new Array(functions.length)
    let counter: number = 0

    functions.forEach((curFn, fnIndex) => {
      curFn()
        .then((resFn) => {
          promisesArr[fnIndex] = resFn
          counter++

          if (counter == functions.length) {
            resolve(promisesArr)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  })

};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */