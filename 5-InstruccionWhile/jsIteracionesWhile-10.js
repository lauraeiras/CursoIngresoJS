/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	

	respuesta="si";
	
	while(respuesta !="no")// evaluo lo contrario
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)){
			numeroIngresado = prompt("Ingrese un numero valido");//valido tipo de dato
		    numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado > 0){//positivos 
			contadorPositivos++;
			sumaPositivos = sumaPositivos + numeroIngresado;
		}else{
			if(numeroIngresado < 0){// negativos
				sumaNegativos = sumaNegativos + numeroIngresado;
				contadorNegativos++;
				
			}else{
				cantidadCeros++;// por descarte 

			}
		}
		if(numeroIngresado%2 == 0){
			cantidadPares++;
		}
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	//para que no me de nan si no ingreso negativos(Preguntar si esta bien)
	if(contadorPositivos != 0){
		promedioPositivos = sumaPositivos/contadorPositivos;
	}else{
		promedioPositivos = "No se ingresaron positivos";
	}
	if(contadorNegativos != 0){
		promedioNegativos = sumaNegativos/contadorNegativos;
	}else{
		promedioNegativos = "no se ingresaron negativos";
	}

	
	
	diferenciaPositivosNegativos = sumaPositivos+(sumaNegativos);// dunciona buscar otra manera

	document.write("la suma de negativos es : "+sumaNegativos+"<br>");
	document.write("la suma de Positivos es : "+sumaPositivos+"<br>");
	document.write("Cantidad de negativos es : "+contadorNegativos+"<br>");
	document.write("Cantidad de positivos es : "+contadorPositivos+"<br>");
	document.write("Cantidad de ceros es : "+cantidadCeros+"<br>");
	document.write("Cantidad de Pares : "+cantidadPares+"<br>");
	document.write("Promedio de positivos : "+promedioPositivos+"<br>");
	document.write("Promedio de negativos : "+promedioNegativos+"<br>");
	document.write("Diferencia de positivos y negativos : "+diferenciaPositivosNegativos+"<br>");
}//FIN DE LA FUNCIÓN