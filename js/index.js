// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
  }}
  )
}

  // Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

  // Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }}
  );
}

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  function renderWhiteSauce() {
    document.querySelectorAll('.sauce-white').forEach(sauce => {
      if (state.whiteSauce) {
        sauce.style.visibility = 'visible'
      } else {
        sauce.style.visibility = 'hidden'
      }}
      )
  }



// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust-gluten-free').forEach(crust => {
    if (state.glutenFreeCrust) {
      crust.style.visibility = 'visible'
    } else {
      crust.style.visibility = 'hidden'
    }}
    )
}


  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  function renderButtons() {

  let pepBtn = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni === true) {
    pepBtn.classList.add("active")
  } else {
    pepBtn.classList.remove("active")
   }

  let mushBtn = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms === true) {
    mushBtn.classList.add("active")
  } else {
   mushBtn.classList.remove("active")
  }

  let greenPepBtn = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers === true) {
    greenPepBtn.classList.add("active")
  } else {
    greenPepBtn.classList.remove("active")
  }

  let wSauceBtn = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce === true) {
    wSauceBtn.classList.add("active")
  } else {
    wSauceBtn.classList.remove("active")
  }

  let gluFreeBtn = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust === true) {
    gluFreeBtn.classList.add("active")
  } else {
    gluFreeBtn.classList.remove("active")
  }
}


//Iteration 4: Ingredients and prices
function renderPrice() {
  let pepPrice = document.querySelector('#li-pepperoni');
  if (state.pepperoni) {
    pepPrice.style.visibility = 'visible'; 
  } else {
    pepPrice.style.visibility = 'hidden';
} 

let mushPrice = document.querySelector('#li-mushrooms');
  if (state.mushrooms) {
    mushPrice.style.visibility = 'visible';
  } else {
    mushPrice.style.visibility = 'hidden';
}

let greenPepPrice = document.querySelector('#li-green-peppers');
  if (state.greenPeppers) {
    greenPepPrice.style.visibility = 'visible';
  } else {
    greenPepPrice.style.visibility = 'hidden';
}

let saucePrice = document.querySelector('#li-sauce-white');
  if (state.whiteSauce) {
    saucePrice.style.visibility = 'visible';
  } else {
    saucePrice.style.visibility = 'hidden';
}

let crustPrice = document.querySelector('#li-gluten-free-crust');
  if (state.glutenFreeCrust) {
    crustPrice.style.visibility = 'visible';
    } else {
    crustPrice.style.visibility = 'hidden';
}

let totalPrice = document.querySelector('#total')
let totalCost = 0;
for (let ingredientKey in ingredients) 
  if (state[ingredientKey]) {totalCost += ingredients[ingredientKey].price}
  totalPrice.innerHTML = `$${basePrice+totalCost}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});