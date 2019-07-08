function calc() {
  
  let input = document.querySelector("#input").value;
  let convertTo = document.querySelector("#unit").value;
  let convertFrom = document.querySelector("#unit1").value;
  
  const cm = "cm";
  const mm = "mm";
  const ft = "ft";
  let answer;
  let end;
  
  

  //Formulas for each conversion type
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
  } if (convertTo == "cm") {
    end = cm;
  } if (convertTo == "mm") {
    end = mm;
  } if (convertTo == "ft") {
    end = ft;
  } 
  
  console.log()
  document.getElementById("results").innerHTML = answer.toFixed(2);
  document.getElementById("resultsAb").innerHTML = end;
  document.getElementById("#input").reset();
  
  
}

