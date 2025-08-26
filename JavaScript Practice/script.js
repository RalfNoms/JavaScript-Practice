const dem = document.querySelector("name")

function btn(){
    document.getElementById("name").innerHTML = "Ralf Jone <br> is my first name and my nickname was in the previous"
    document.body.style.color = "red"
}

//functions
const greetings = function(name, message){
    console.log("Hello there " + name + message)
   

}
greetings("Ralf jone", " Nice to meet you")

//arrow functions

const display = myname => console.log(myname)
const number = (num1, num2, num3) => num1 + num2 * num3

display("Ralf Jone Nomos")
console.log(number(1, 2, 3))



//callback function 
setTimeout(() => {
    console.log("hello there")
}, 5000)



const func1 = (name) => {
    alert(`Hello! ${name}!`)
}

const func2 = (callfunction) => {
    const name = prompt("Please Enter your Name here!")
  callfunction(name)
}
func2(func1)












