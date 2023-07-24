function tempCon() {
    const tempVal = document.getElementById("sch").value;
    const unit = document.getElementById("scale");
    const unitSel = unit.options[unit.selectedIndex].value;

    if (isNaN(tempVal)) {
      document.getElementById("result").innerHTML = "Please enter a temperature value.";
      return;
    }

    let convertedTemp;
    if (unitSel === "celcious") {
      convertedTemp = ((tempVal * 9/5) + 32).toFixed(3);
      document.getElementById("result").innerHTML= convertedTemp + "&#8457;";
    } else if (unitSel === "fahrenheit") {
      convertedTemp = ((tempVal - 32) * 5/9).toFixed(3);
      document.getElementById("result").innerHTML= convertedTemp + "&#8451;";
    }
}