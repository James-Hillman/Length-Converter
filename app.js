function calc() {
  let input = document.querySelector("#input").value;
  let convertTo = document.querySelector("#unit").value;
  let convertFrom = document.querySelector("#unit1").value;
  let answer;

    if (convertFrom == "mm" && convertTo == "cm") {
    answer = input / 10;
  } else if (convertFrom == "cm" && convertTo == "mm") {
    answer = input * 10;
  } else if (convertFrom == "ft" && convertTo == "cm") {
    answer = input * 30.48;
  } else if (convertFrom == "cm" && convertTo == "ft") {
    answer = input / 30.48;
  } else if (convertFrom == "mm" && convertTo == "ft") {
    answer = input / 304.8;
  } else if (convertFrom == "ft" && convertTo == "mm") {
    answer = input * 304.8;
  } else if (convertFrom == "mm" && convertTo == "mm") {
    alert ("Unable to Convert same Units");
  } else if (convertFrom == "cm" && convertTo == "cm") {
    alert ("Unable to Convert same Units");
  } else if (convertFrom == "ft" && convertTo == "ft") {
    alert ("Unable to Convert same Units");
  } 
  


  console.log(answer)
  document.getElementById("results").innerHTML = answer.toFixed(2);
  
}
