
const box = document.querySelector(".box")
const btn = document.querySelector("button")

box.addEventListener("click", function() {
  box.textContent = "Hello Everyone!"
  box.style.color = "yellow"
})

btn.addEventListener("click", function() {
    alert("Hello There!")
})






