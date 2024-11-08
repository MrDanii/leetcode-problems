// It only counts unique values
function removeDuplicates(nums: number[]): number {
  let lastNum: number
  let k: number
  
  if(nums.length > 0){
      lastNum = nums[0]
      k = 1
      
      for(let i = k; i < nums.length; i++){
          if(lastNum != nums[i]){
              nums[k] = nums[i]
              lastNum = nums[i]
              k++
          }
      }
      return k
  }else{
      return 0
  }
};