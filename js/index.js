const inputs = document.querySelectorAll(".controls input");

const timeExcersice = document.querySelector(".timeExcersice");
const timeBreak = document.querySelector(".timeBreak");

const handleUpdate = function () {
  if (this.name === "excercise") {
    timeExcersice.innerHTML = `${this.value} s`;
  } else {
    timeBreak.innerHTML = `${this.value} s`;
  }
};

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
