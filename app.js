function calc() {
  let input = document.querySelector("#input").value;
  let unit = document.querySelector("#unit").value;
  let convert;
  
  
  if (unit == "Feet") {
    convert = input * 12;
  } else if (unit == "mm") {
    convert = input / 25.4;
  } else if (unit == "cm") {
    convert = input / 2.54;

    
  }


console.log(convert)
  
};
