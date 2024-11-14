// class CustomNode<T> {
//   data: T
//   next: CustomNode<T> | null

//   constructor(data: T) {
//     this.data = data
//     this.next = null
//   }
// }

// class MyQueue<T> {
//   head: CustomNode<T> | null
//   tail: CustomNode<T> | null
//   size: number

//   constructor(node: CustomNode<T> | null) {
//     this.head = node  // or also called root
//     this.tail = node

//     this.size = (node) ? 1 : 0
//   }

//   // unshift in an array
//   enqueue(node: CustomNode<T>) {
//     if (this.size === 0) {
//       this.head = node
//       this.tail = node
//     } else {
//       this.tail!.next = node
//       this.tail = node
//     }
//     this.size++
//   }

//   dequeue() {
//     this.head = this.head!.next
//     this.size--
//   }
// }

function predictPartyVictory(senate: string): string {
  let radiants: number[] = [] // well have the position index of each radiant, in senate string
  let dires: number[] = [] // well have the position index of each dire, in senate string
  
  for (let i = 0; i < senate.length; i++) {
    senate.charAt(i) === 'R' ? radiants.push(i) : dires.push(i)
  }

  // console.log(radiants);
  // console.log(dires);

  while (radiants.length > 0 && dires.length > 0) {
    // person who is first, can delete the next one (enemy)
    if (radiants[0] < dires[0]) {
      radiants.push(radiants.shift()! + senate.length)
      dires.shift()
    } else {
      dires.push(dires.shift()! + senate.length)
      radiants.shift()
    }
  }

  return (radiants.length == 0) ? 'D' : 'R'
};

console.log(predictPartyVictory('RRDRDRDDDRRDDDDD'));