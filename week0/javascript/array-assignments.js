// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getEvenNumbers(arr) {
  return arr.filter((x) => x % 2 == 0)
}
console.log(getEvenNumbers(arr))

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
const users = [
  {
    name: 'Harkirat',
    age: 21,
    gender: 'male',
  },
  {
    name: 'raman',
    age: 22,
    gender: 'male',
  },
]

function getAdultUsers(users) {
  return users.filter((x) => x.age > 18)
}
console.log(getAdultUsers(users))

// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

getAdultUsersAndMales = (users) =>
  users.filter((x) => x.age > 18 && x.gender === 'male')
