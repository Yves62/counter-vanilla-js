let increase = document.querySelector(".increment");
let counter = document.querySelector(".cpt");
let decrease = document.querySelector(".decrease");

let number = 0;

increase.addEventListener("click", () => {
  number++;
  counter.textContent = number;
});
decrease.addEventListener("click", () => {
  if (number === 0) {
    number = 0;
  } else {
    number--;
  }
  counter.textContent = number;
});
