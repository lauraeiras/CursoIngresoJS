/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
 {
	var claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");


	/*while(claveIngresada != "utn750"){

		claveIngresada = prompt("Error Ingrese la clave");

	}*/

	var contador = 1;
	while(claveIngresada != "utn750" && contador < 3) {
		contador++;
		claveIngresada = prompt("Error ingrese clave");
		
	}
	alert("Ingreso tres veces mal");
	


}//FIN DE LA FUNCIÓN
