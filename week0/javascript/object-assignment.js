// assignment1 -> Write a function that takes a user as an input and greets them with their name and age

function greetUser(user) {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`)
}

let user = {
  name: 'Nithin',
  age: 22,
}
greetUser(user) // solution 1
greetUser({ name: 'Nithin', age: 22 }) // solution 2

//assignment2 -> Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function getGenderPrefix(gender) {
  if (gender === 'male') return 'Mr'
  else if (gender === 'female') return 'Mrs'
  else return 'Others'
}

function greetUserbyGender(user) {
  let prefix = getGenderPrefix(user.gender)
  console.log(`Hi ${prefix} ${user.name}, your age is ${user.age}`)
}

let user1 = {
  name: 'Nithin',
  age: 22,
  gender: 'male',
}
greetUserbyGender(user1)

// assignment3 -> Also tell the user if they are legal to vote or not
function isLegalToVote(user) {
  if (user.age >= 18) return true
  else return false
}

console.log(isLegalToVote(user1))
