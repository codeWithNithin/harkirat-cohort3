// Write a function called sum that finds the sum from 1 to a number

function sum(num) {
  let res = 0
  for (let i = 1; i <= num; i++) {
    res += i
  }
  return res
}

console.log(sum(4))
