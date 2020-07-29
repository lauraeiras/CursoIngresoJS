/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si"){
		contador++;
		numero = prompt("Ingresar un numero");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("Error ingrese numero valido");
			numero = parseInt(numero);
		}
		if(numero >= 0){
			sumaPositivos = sumaPositivos + numero;
		}else{
			multiplicacionNegativos = multiplicacionNegativos * numero;

		}
		respuesta = prompt ("¿Desea seguir? Ingrese si");


	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN