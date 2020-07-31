/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables

	banderaDelPrimero = true;
	respuesta = 'si';

	while (respuesta == "si") {


		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Error ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if (banderaDelPrimero) {
			banderaDelPrimero = false;

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}

		if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;

		} else {
			if (numeroIngresado < numeroMinimo)
				numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("desea continuar?");
	}
	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN