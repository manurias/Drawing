var tasti = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(tasti);

document.addEventListener("keyup", disegnareTastiera);

function disegnareTastiera(evento) {
  // console.log("tasto premuto");
  //console.log(evento.keyCode);

  /*if (evento.keyCode == tasti.UP) {
    console.log("su");
  }
  */
  switch (evento.keyCode) {
    case tasti.UP:
      console.log("su");
      break;
    case tasti:
      DOWN: console.log("giù");
      break;
    default:
      console.log("altro tasto");
      break;
  }
  /*if (evento.keyCode == tasti.DOWN) {
    console.log("giù");
  }
  if (evento.keyCode == tasti.LEFT) {
    console.log("sinistra");
  }
  if (evento.keyCode == tasti.RIGHT) {
    console.log("destra");
  }*/
}
