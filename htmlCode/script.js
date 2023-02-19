//catch btn and counter element
const incrementEl = document.getElementById("increment")
const decrementEl = document.getElementById("decrement")
const counterEl = document.getElementById("counter")


//initial state

let count = 0

// add event listener

incrementEl.addEventListener("click", () => {
    count++
    counterEl.innerText=count
})

decrementEl.addEventListener("click", () => {
    count--
    counterEl.innerText=count
})