"use strict";
const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');

const type = function (button) {
  button.addEventListener(
    "click",
    () => (display.value += button.defaultValue)
  );
};

const reset = function (button) {
  button.addEventListener("click", () => (display.value = ""));
};

const de = function (button) {
  button.addEventListener(
    "click",
    () => display.value = `${display.value.slice(0,-1)}`
  );
};

const calculate = function (button) {
  button.addEventListener(
    "click",
    () => (display.value = Big(eval(display.value)).round(2).valueOf())
  );
};

buttons.forEach((button) => {
  if (
    button.defaultValue !== "AC" &&
    button.defaultValue !== "DE" &&
    button.defaultValue !== "="
  )
    type(button);
  else if (button.defaultValue === "AC") reset(button);
  else if (button.defaultValue === "DE") de(button);
  else if (button.defaultValue === "=") calculate(button);
});
