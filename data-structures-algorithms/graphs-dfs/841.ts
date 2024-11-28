function canVisitAllRooms(rooms: number[][]): boolean {
  let roomsVisited: Set<number> = new Set([0])
  let tempKeys = new Set(rooms[0])  // removing duplicates in room "0"
  // add new key, except key for room "0" because we already opened that room
  let newKeys: number[] = Array.from(tempKeys).filter((value) => value != 0)
  //!! Note: dont use spread operator in typescript with sets and arrays, this leads to unexpected behavior
  //!! thats why I used Array.from() method
  //https://github.com/Microsoft/TypeScript/issues/8856
  // Example: [...(new Set(room[0]))] returns --> an empty array

  while (newKeys.length > 0) {
    let currentKey: number = newKeys.pop()!
    roomsVisited.add(currentKey)

    // Before we add new keys, we need to filter keys from rooms that we already visit
    let tempKeys = rooms[currentKey].filter((value) => !roomsVisited.has(value))
    newKeys.push(...tempKeys)
  }

  return roomsVisited.size == rooms.length
};

//! This work only if you can only visit rooms in order
// function canVisitAllRooms(rooms: number[][]): boolean {
//   let keysInventory: Map<number, number> = new Map<number, number> // we will have (keyNumber, and the qty of that key)
//   keysInventory.set(0, 1) // we start with 1 key from room 0

//   for (let i = 0; i < rooms.length; i++) {
//     let keyExists = keysInventory.get(i);
//     if (keyExists != null) {
//       // and now that we enter, we can collect all keys inside the room
//       for (let j = 0; j < rooms[i].length; j++) {
//         keysInventory.set(rooms[i][j], 1);
//       }
//     } else {
//       // if key does not exist, it means that we can't enter this room, so we return false
//       return false
//     }
//   }

//   return true // this means that we already visit all rooms
// };

// Example #1
// Input: rooms = [[1],[2],[3],[]]
// Output: true
console.log([[1], [2], [3], []]);
canVisitAllRooms([[1], [2], [3], []])
// console.log(canVisitAllRooms([[1],[2],[3],[]]));

// Example #2
// Input: rooms = [[1,3],[3,0,1],[2],[0]]
// Output: false
// console.log([[1,3],[3,0,1],[2],[0]]);
// console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));

// Example #3
// Input: rooms = [[2],[],[1]]
// Output: true

// console.log([[2],[],[1]]);
// console.log(canVisitAllRooms([[2],[],[1]]));