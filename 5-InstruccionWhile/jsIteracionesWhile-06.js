function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	contador=0;
	acumulador=0;

	

	while(contador < 5){
		
		numeroIngresado = prompt("Ingrese 5 numeros");
		numeroIngresado =parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado)){//validacion
			numeroIngresado = prompt("Ingrese numero valido");
			numeroIngresado = parseInt(numeroIngresado);//vuelvo a parsearlo
		}
		acumulador = acumulador+numeroIngresado;
		contador++;// primero ingresa y despues cuenta;
		
	}


	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN