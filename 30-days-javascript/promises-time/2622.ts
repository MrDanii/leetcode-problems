class TimeLimitedCache {
  cacheOb: {}

  constructor() {
    this.cacheOb = {}
  }

  set(key: number, value: number, duration: number): boolean {
    const newTimeoutId = setTimeout(() => {
      delete this.cacheOb[key]
      clearTimeout(newTimeoutId)
    }, duration)

    if (Object.hasOwn(this.cacheOb, key)) {
      // if exists, clear timeout duration and overwrite value (return false)
      clearTimeout(this.cacheOb[key].durationRef)
      this.cacheOb[key] = { value, durationRef: newTimeoutId }
      return true
    } else {
      // if not exists, create value (return true)
      this.cacheOb[key] = { value, durationRef: newTimeoutId }
      return false
    }
  }

  get(key: number): number {
    return this.cacheOb[key]?.value ?? -1
  }

  count(): number {
    return Object.keys(this.cacheOb).length
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000));  // false
console.log(timeLimitedCache.set(1, 42, 1000));  // false
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.get(2));
console.log(timeLimitedCache.count());