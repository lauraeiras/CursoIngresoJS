function mostrar() {
  var numero;
  var contador = 1;
  var contDivisores = 0;

  do {
    numero = prompt("Ingrese numero");
    numero = parseInt(numero);
  } while (isNaN(numero) || numero < 1);

  for (contador = 1; contador <= numero; contador++) {
    if (numero % contador == 0) {
      console.log(contador);
      contDivisores++;
    }
  }
  if (contDivisores == 2) {
    console.log(numero + " Es numero primo ");
  } else {
    console.log(numero + " No es numero primo");
  }
} //FIN DE LA FUNCIÓN
