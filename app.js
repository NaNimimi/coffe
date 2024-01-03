function number() {
  let numberer = document.getElementById("number");
  let numberValue = parseInt(numberer.innerHTML);
  numberValue++;
  numberer.innerHTML = numberValue;
}