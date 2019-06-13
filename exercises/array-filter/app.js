const nums = [3, 6, 8, 2]

// function fiveAndGreaterOnly(nums){
//     const filtered = nums.filter(function(number){
//         return number > 5;
//     })
//     return filtered
// }

// console.log(fiveAndGreaterOnly(nums))

function evensOnly(nums){
    filtered = nums.filter(function(number){
        return number % 2 === 0;
    })
    return filtered
    
  }

//   console.log(evensOnly(nums))

const characters = ["dog","wolf","by","family","eaten","camping"]

function fiveCharactersOrFewer(arr){
  filtered = arr.filter(function(str){
      if(str.length <= 5){
          return str
      };
  })
  return filtered 

}

console.log(fiveCharactersOrFewer(characters))
