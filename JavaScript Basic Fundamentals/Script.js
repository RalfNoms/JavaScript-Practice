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
//Cannot Reasign the variables

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
  
}
//Dot Notation
person.name = 'lol'
console.log(person.name)

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


//functions
function run(name){
    return `${name} is Running thru the finished line`
}
console.log(run("Rj Sukarap"))


// const func1 = (name) => {
//     alert(`Hello my Name is ${name}`)
// }

// const func2 = (callback) => {
//      const name = prompt("Please Enter your Name Here!")
//      callback(name)
// }
// func2(func1)

//object literals
const tao = {
    name: "ralf",
    lastname: "nomos",
    age: 20,
    favoriteColor: ["blue", "gray", "red"],
    parenstName: {
       father: "edgardo",
       mother: "divina",
       sister: "ace"
    }
}
console.log(tao.favoriteColor[2])

//object literals inside the array
const Contact = [
    {
        id: 12,
        name: "Rj",
        isSaved: "Phone"  
    },
    {
        id: 13,
        name: "john",
        isSaved: "Phone"

    },
    {
        id: 14,
        name: "micheal",
        isSaved: "SD"

    }
]
console.log(Contact[1])


//for loops
for(let i = 10; i >= 1; i--){
   console.log(`${i} Hello World`)
}

for(let i = 10; i >= 1; i--){
    if(i % 2 !== 0) console.log(i)
}
for(let contact of Contact){
    console.log(contact.name)
}

//for Each Loop
Contact.forEach(function(contact){
    console.log(contact.id)
})

//Maps 
const ContactsFullname = Contact.map
(function(contact){
    return contact.name
})
console.log(ContactsFullname)


//Filter
const ContactPhone = Contact.filter 
(function(contact){
    return contact.isSaved == "SD"
})
console.log(ContactPhone)


//callback functions setTimeout 
// const posts = [
//     {title: "Post One", Body: "this is post one"},
//     {tile: "Post Two", Body: "this is post two" },
//     {title: "Post three", Body: "this is post three"}
// ]
// function getPosts(){
//     setTimeout(() => {
        
//         let output = " "
//         posts.forEach((post, index) => {
//             output += (`<li>${post.title}</li>`)
//         })
//         document.body.innerHTML = output

//     }, 5000)
// }

// function createPosts(post, callback){
//     setTimeout(() => {
//         posts.push(post)
//         callback()

//     }, 7000)
// }
// createPosts({title: "Post Four", Body: "this is post four"}. getPosts)



//class OOP
//function constructor
function data (firstname, lastname, bt){
    this.firstname = firstname
    this.lastname = lastname
    this.bt = bt

    this.getFullName = () => {
        return `${this.firstname} ${this.lastname} ${this.bt}`
    }
}
// class obj {
//     constructor(firstname, lastname, bt){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.bt = bt


//     }
//     getFullName(){
//         return `${this.firstname} ${this.lastname} ${this.bt}`
//     }
// }
//instantiate
const dat1 = new data("john", "smith", "B")
// const obj2 = new obj("micheal", "ball", "A")
console.log(dat1.getFullName())
// console.log(obj2)


//getters and setter in class
class Square {
    constructor(_width){
        this.width = _width
        this.height = _width
        this.numofRequestsForArea = 0
    }
    get area(){
        this.numofRequestsForArea++
        return  this.width * this.height
    }
    set area(area){
        this.width = Math.sqrt(area)
        this.height = this.width
    }
}
const sqaure1 = new Square(2)
// console.log(sqaure1.area)
sqaure1.area = 25
// console.log(sqaure1.width)
// console.log(sqaure1.height)
console.log(sqaure1.area)
console.log(sqaure1.area)
console.log(sqaure1.area)
console.log(sqaure1.area)

console.log(sqaure1.numofRequestsForArea)
//array for loop object inside object literal
const arda = {
     age: 17,
     stats: [
        {
          competition: "super league",
          appearances: 3,
          goals: 2
        },
        {
            competition: "europe league",
            appearances: 2,
            goals: 0
        }
        
     ]
    
}
let totalGoals = 0
for(let stat of arda.stats){
    totalGoals += stat.goals
}
console.log(totalGoals)

//another getters & setters
const sample = {
    firstname: "mosh",
    lastname: "haduken",

    get fullName(){
        return `${sample.firstname} ${sample.lastname}`
    },
    set fullName(value){
      const parts = value.split(" ")  
      this.firstname = parts[0]
      this.lastname = parts[1]
      
    }
}
person.fullName = "Ralf Jone"
console.log(sample)


//classical prototypal
var human = {
    species: "human",
    saySpecies: function(){
        console.log(this.species)

    },
    sayName: function(){
       console.log(this.sayName)
    }
}
var musican = object.create(human)
musician.playInstrument = function(){
    console.log("plays..." + this.instrument)
}
var will = object.create(musician)
will.name = "will"
will.instrument = "drum"






























