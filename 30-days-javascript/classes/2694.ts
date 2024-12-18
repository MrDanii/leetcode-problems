type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void
}

class EventEmitter {
  /* //* object "eventsList" will looks like this:
  {
    "eventName1": [{id, fn1}, {id, fn2}, ...}]
    "eventName2": [{id, fn1}, {id, fn2}, ...}]
    ...
  }
  */
  eventsList: Record<string, { id: Symbol, callback: Callback }[]>

  constructor() {
    this.eventsList = {}
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    const id = Symbol(eventName)
    this.eventsList[eventName] ||= [] // if not exists, create an empty array for our functions
    this.eventsList[eventName].push({ id, callback })

    return {
      unsubscribe: () => {
        this.eventsList[eventName] = this.eventsList[eventName].filter((event) => {
          return event.id !== id
        })
      }
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    // special case, not a single event with that name has subcribed
    if (!this.eventsList[eventName]) return []

    let resultEmmits: any = []
    for (let curEvent of this.eventsList[eventName]) [
      resultEmmits.push(curEvent.callback(...args))
    ]

    return resultEmmits
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

const emitter = new EventEmitter()

function onClickCallback() { return 99 }
function onClickCallback2() { return 33 }
const sub = emitter.subscribe('onClick', onClickCallback)
const sub2 = emitter.subscribe('onClick', onClickCallback2)
const sub3 = emitter.subscribe('onClick', onClickCallback)
console.log(emitter.emit('onClick'));
sub3.unsubscribe()
console.log(emitter.emit('onClick'));
console.log(emitter.emit('onKeyPressed'));
