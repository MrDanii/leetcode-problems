/*
  2 people A and B have same length of array all contains int, and with a startFlag odd and even. 
  what you need to do is to calculate the sum of arrayA-arrayB of each odd item or even item (based on startFlag). 
  if sum >0, A wins, output A's name, if sum<0, output B's name, if sum==0, output Tie

  like:
  Tom=[2,2,3]
  Jerry=[3,1,4]
  flag=odd
  sum = (2-3)+(3-4)=-2
*/

function playGame(arrA: number[], arrB: number [], flag: string): string {
  const startingIndex: number = (flag == 'odd') ? 0 : 1
  let sum: number = 0
  
  for (let i = startingIndex; i < arrA.length; i = i+2) {
    console.log(arrA[i], arrB[i]);
    sum += arrA[i] - arrB[i]
  }

  if (sum > 0 ) return 'Tom'
  if (sum < 0) return 'Jerry'
  else return 'tie'
}

console.log(playGame([2,2,3,4], [3,1,4,4], 'even'));