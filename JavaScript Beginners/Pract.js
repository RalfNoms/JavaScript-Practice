// first code of JavaScript
console.log('Hello World')

//Variables let data types
let name = 'Ralf'
console.log(name)
//Cannot be a reserved keyword
//should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hypen (-)
//Are case - sensitive

//Variables const data types
const interestRate = 0.3
// interestRate = 1
console.log(interestRate)
//Cannot Reasign the Objectives or data types

//Primitive Types
//String, Number, Boolean, Undifined, Null
let name1 = 'Ralf'//String literal
let age = 20 // Number literal
let isApproved = true //Boolean literal
let firstName = undefined // undifined
let lastName = null // null

//Reference Types
//object, Array, Function
let person = {
    name: 'ralf',
    age: 20
  
};
//Dot Notation
person.name = 'Bubu'

//Bracket Notaition
person['name'] = 'Mary'
console.log(person.name)


//Arrays
let selectedColors = ['red', 'blue']
selectedColors[2] = 1
console.log(selectedColors)

//Functions
function greet(names, lastNames){
    console.log('hello' + ' ' + names + ' ' + lastNames)
}
greet('Ralf', 'Nomos')


//Types of Functions

function sqaure(number){
    return number * number
}
let number = sqaure(2)
console.log(number)

console.log(sqaure(2))





