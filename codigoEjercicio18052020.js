var textoNumero = document.getElementById("txtNumero");
var botonCalcular = document.getElementById("btnCalcular");
var botonOtraTable = document.getElementById("btnReiniciar");

botonCalcular.addEventListener("click",funcionTabla);
botonOtraTable.addEventListener("click",funcionReiniciar);
textoNumero.addEventListener("keyup",tablaporenter);

function funcionTabla(){
  var numero = parseInt(textoNumero.value);

  for (var i = 1; i <= 10; i++) {
    var newdoc = document.createElement("div");
    var t = document.createTextNode(numero + " X " + i + " = " + (numero*i));
    newdoc.appendChild(t);
    document.getElementsByTagName("h3")[0].appendChild(newdoc);
  }
}

function funcionReiniciar(){
  location.reload(true);
}
