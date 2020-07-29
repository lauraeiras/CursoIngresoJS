/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	contador=0;
	acumulador=0;
	respuesta='si';
	
	
	while(respuesta == "si"){
		contador++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero) ){
			numero = prompt("Error ingresar numero");
			numero = parseInt(numero);
		}

		acumulador = acumulador + numero;
	    respuesta = prompt ("¿Desea seguir? Ingrese si");
	
		

	}

	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN