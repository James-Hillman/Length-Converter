function calc() {
  let input = document.querySelector("#input").value;
  let convertTo = document.querySelector("#unit").value;
  let convertFrom = document.querySelector("#unit1").value;

  const cm = "cm";
  const mm = "mm";
  const ft = "ft";
  const mtr = "mtr";
  const inches = "inches";

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
  } else if (convertFrom == "mtr" && convertTo == "cm") {
    answer = input * 100;
  } else if (convertFrom == "mtr" && convertTo == "ft") {
    answer = input * 3.281;
  } else if (convertFrom == "mtr" && convertTo == "mm") {
    answer = input * 1000;
  } else if (convertFrom == "cm" && convertTo == "mtr") {
    answer = input / 100;
  } else if (convertFrom == "mm" && convertTo == "mtr") {
    answer = input / 1000;
  } else if (convertFrom == "ft" && convertTo == "mtr") {
    answer = input / 3.281;
  } else if (convertFrom == "inches" && convertTo == "mtr") {
    answer = input / 39.37;
  } else if (convertFrom == "inches" && convertTo == "cm") {
    answer = input * 2.54;
  } else if (convertFrom == "inches" && convertTo == "mm") {
    answer = input * 25.4;
  } else if (convertFrom == "inches" && convertTo == "ft") {
    answer = input / 12;
  } else if (convertFrom == "cm" && convertTo == "inches") {
    answer = input / 2.54;
  } else if (convertFrom == "mm" && convertTo == "inches") {
    answer = input / 25.4;  
  } else if (convertFrom == "mtr" && convertTo == "inches") {
    answer = input * 39.37;
  } else if (convertFrom == "ft" && convertTo == "inches") {
    answer = input * 12; 
  }  

  //Outputs error if the same unit is selected in both dropdowns
    else if (convertFrom == "mm" && convertTo == "mm") {
    alert("Unable to Convert same Units");
  } else if (convertFrom == "cm" && convertTo == "cm") {
    alert("Unable to Convert same Units");
  } else if (convertFrom == "ft" && convertTo == "ft") {
    alert("Unable to Convert same Units");
  } else if (convertFrom = "mtr" && convertTo == "mtr") {
    alert("Unable to Convert same Units");
  } else if (convertFrom = "inches" && convertTo == "inches") {
    alert("Unable to Convert same Units");
  }

  //Shows the result abreviation below the resulting output
  if (convertTo == "cm") {
    end = cm;
  }
  if (convertTo == "mm") {
    end = mm;
  }
  if (convertTo == "ft") {
    end = ft;
  }
  if (convertTo == "mtr") {
    end = mtr;
  }
  if (convertTo == "inches") {
    end = inches;
  }

  console.log();
  document.getElementById("results").innerHTML = answer.toFixed(2);
  document.getElementById("resultsAb").innerHTML = end;
  
}

function refreshDiv() {
  input.value = ""
}