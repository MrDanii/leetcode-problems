// *short answer
async function sleep3(millis: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, millis))
}

async function sleep2(millis: number): Promise<void> {
  const myPromise: Promise<void> = new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, millis)
  })
  return myPromise
}

async function sleep(millis: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, millis)
  })
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
let t = Date.now()
sleep(500).then(() => console.log(Date.now() - t))
