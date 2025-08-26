const people = document.getElementById("people")

people.addEventListener("change", selectpeople) 

function selectpeople(){
    choosenPerson.value = this.value
}
