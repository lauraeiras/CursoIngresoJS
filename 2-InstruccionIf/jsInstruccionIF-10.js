function mostrar()
{
	/*//Genero el número RANDOM entre 1 y 10 

	var nota;
	var max;
	var min;

	max = 11;
	min = 1;

	nota = Math.floor(Math.random()*(max - min))+min;
	console.log(nota);

	if(nota > 8  ){
		alert("EXCELENTE");
		//console.log("Exelente");//chequeo
	}else{  
		if(nota >= 4){
			alert("APROBÓ");
			//console.log("APROBÓ");
		}else{
				//if(nota < 4)// no es necesario

				//{
					alert("Vamos,la proxima se puede");
					//console.log("Vamos,la proxima se puede");
				//}

			}
	 
	}*/
	
	/* Calcular dos numeros random entre1 y 51
	* Si los dos numeros son pares multiplicarlos.Mostrar dato
	* Si los dos son impares restarlos. Mostrar dato
	* si alguno es divisible por 5 elevarlo al cubo.Mostrsr dato
	*Si no ocurrio ningun caso anterior mostrar "No paso nada"
	* Mostrar el resultado en un solo alert*/

	var numeroUno;
	var numeroDos;
	var max;
	var min;
	var mensaje;

	var max = 52;
	var min = 1;
	var mensaje = "";

	numeroUno = Math.floor(Math.random()*(max - min))+min;
	numeroDos = Math.floor(Math.random()*(max - min))+min;

	console.log(numeroUno);
	console.log(numeroDos);

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	 

		
	if(numeroUno%2 == 0 && numeroDos%2 == 0){
		mensaje = numeroUno * numeroDos;	
		alert(multiplicacion);
	}else{
		
		if(numeroUno%2 != 0 && numeroDos%2 != 0 ){
			mensaje = numeroUno - numeroDos;		
			alert(resta);
		} 
	}
		if(numeroUno %5 == 0 ) {
			console.log(Math.pow(numeroUno,3));// Mahth.pow(numeroUno,3)
		}else{
			if( numeroDos %5 == 0){
				mensaje = mensaje+" Alguno es divisible por 5 y se elevo al cubo"+Math.pow(numeroDos,3);// Mahth.pow(numeroUno,3)
			}
		}
			/*if(!(numeroUno%2 == 0 && numeroDos%2 == 0) && !(numeroUno%2 != 0 && numeroDos%2 != 0)  && !(numeroUno %5 == 0)  && !(numeroDos %5 == 0)) {
				alert("No paso nada");
				
			}*/
				alert(multiplicacion+" "+resta+" "+ Math.pow(numeroUno,3)+" "+Math.pow(numeroDos,3))




}//FIN DE LA FUNCIÓN