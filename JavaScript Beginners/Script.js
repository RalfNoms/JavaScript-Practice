const name = document.querySelector("name")

function btn() {
  document.getElementById("name").innerHTML = "Ralf Jone Nomos"
  document.body.style.color = "red"

}
const country = document.getElementById("select")

country.addEventListener("change", selectCountry)

function selectCountry(){
    choosenCountry.value = this.value
}

//call back function
const func1 = (name) => {
    alert(`Hello my name is ${name}`)
}
const func2 = (callback) => {
    const name = prompt("Please Enter your name here!")
   callback(name)
}
func2(func1)


    






   

    
