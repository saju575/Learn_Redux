/*

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
*/
/*
redux
*/

//initial state

//select dom elements

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

//initial state

const initialState = {
  value: 0,
};

//create reducer function

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}

//create store

const store = Redux.createStore(counterReducer);

//render function

const rander = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
};
//update UI initially
rander();

//subscribe
//it will trigger when only state change
store.subscribe(rander);

//button click listener

incrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

decrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});
