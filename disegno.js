var testo = document.getElementById("testo_linee");
var pulsante = document.getElementById("pulsantino");
pulsante.addEventListener("click", disegnoPerClick);

var d = document.getElementById("disegnino");
var larghezza = d.width;
var canvas = d.getContext("2d");

function disegnareLinea(colore, xinizio, yinizio, xfinale, yfinale) {
  canvas.beginPath();
  canvas.strokeStyle = colore;
  canvas.moveTo(xinizio, yinizio);
  canvas.lineTo(xfinale, yfinale);
  canvas.stroke();
  canvas.closePath();
}

function disegnoPerClick() {
  var linee = parseInt(testo.value);
  var l = 0;
  var yi, xf;
  var colorino = "#013ADF";
  var spazio = larghezza / linee;

  for (l = 0; l <= 30; l++) {
    disegnareLinea("purple", 0, l * 10, 300);
    disegnareLinea("green", 300, l * 10, 300 - l * 10, 300);
    disegnareLinea("red", 300, 300 - l * 10, 300 - l * 10, 0);
    disegnareLinea("blue", 0, 300 - l * 10, l * 10, 0);
  }

  disegnareLinea(colorino, 1, 1, 1, 299);
  disegnareLinea(colorino, 1, 299, 299, 299);
}
