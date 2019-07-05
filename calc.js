function calc() {
  let input = document.querySelector("#input").value;
  let unit = document.querySelector("#unit").value;
  let unit1 = document.querySelector("#unit1").value;
  let answer;
  if (unit == "mm" && unit1 == "cm") {
    answer = input * 10;
  }
  else if (unit == "cm" && unit1 == "mm") {
    answer = input / 10;
  }
  else if (unit == "ft" && unit1 == "cm") {
    answer = input / 30.48;
  }
  document.getElementById("results").innerHTML = answer.toFixed(1);
}
