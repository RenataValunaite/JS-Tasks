/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

var lbWeig = 2.2046;
var gWeig = 0.001;
var ozWeig = 35.274;

document.querySelector("#converter");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  var kgValue = Number(document.querySelector("input[name=weight]").value);
  document.getElementById("output").innerHTML = kgValue * lbWeig + " lb";
  document.getElementById("output").innerHTML = kgValue / gWeig + " g";
  document.getElementById("output").innerHTML = kgValue * ozWeig + " oz";
});
