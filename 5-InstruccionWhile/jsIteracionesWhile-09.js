/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var contador;
	//iniciar variables
	contador = 0;
	numeroMaximo = 0;
	numeroMinimo = 0;
	banderaDelPrimero = "es el primero";
	respuesta = 'si';

	while (respuesta == "si") {
		
		contador++;
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Error ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(contador == 1){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
			//numeroMaximo = banderaDelPrimero;
			
		}else{
			numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("desea continuar?");
	}
	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
	
}//FIN DE LA FUNCIÓN