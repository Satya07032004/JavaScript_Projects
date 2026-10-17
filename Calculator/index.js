let display = document.getElementById("display");
let AC = document.getElementById("ac");
let DE = document.getElementById("de");
let dot = document.getElementById(".");
let div = document.getElementById("/");
let sin = document.getElementById("sin");
let cos = document.getElementById("cos");
let tan = document.getElementById("tan");
let sqrt = document.getElementById("sqrt");
let nine = document.getElementById("9");
let eight = document.getElementById("8");
let seven = document.getElementById("7");
let mult = document.getElementById("*");
let six = document.getElementById("6");
let five = document.getElementById("5");
let four = document.getElementById("4");
let sum = document.getElementById("+");
let three = document.getElementById("3");
let two = document.getElementById("2");
let one = document.getElementById("1");
let min = document.getElementById("-");
let zero = document.getElementById("0");
let doubleZer = document.getElementById("00");
let equal = document.getElementById("equal");

AC.addEventListener("click", () => {
  display.value = "";
});

DE.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});

sin.addEventListener("click", () => {
  display.value = Math.sin(display.value);
});

cos.addEventListener("click", () => {
  display.value = Math.cos(display.value);
});

tan.addEventListener("click", () => {
  display.value = Math.tan(display.value);
});

sqrt.addEventListener("click", () => {
  display.value = Math.sqrt(display.value);
});

dot.addEventListener("click", () => {
  display.value += ".";
});
div.addEventListener("click", () => {
  display.value += "/";
});
mult.addEventListener("click", () => {
  display.value += "*";
});
sum.addEventListener("click", () => {
  display.value += "+";
});
min.addEventListener("click", () => {
  display.value += "-";
});

nine.addEventListener("click", () => {
  display.value += "9";
});
eight.addEventListener("click", () => {
  display.value += "8";
});
seven.addEventListener("click", () => {
  display.value += "7";
});
six.addEventListener("click", () => {
  display.value += "6";
});
five.addEventListener("click", () => {
  display.value += "5";
});
four.addEventListener("click", () => {
  display.value += "4";
});
three.addEventListener("click", () => {
  display.value += "3";
});
two.addEventListener("click", () => {
  display.value += "2";
});
one.addEventListener("click", () => {
  display.value += "1";
});
zero.addEventListener("click", () => {
  display.value += "0";
});
doubleZer.addEventListener("click", () => {
  display.value += "00";
});

equal.addEventListener("click", () => {
  display.value = eval(display.value);
});
