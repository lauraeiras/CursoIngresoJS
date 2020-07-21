function mostrar()
{
	//tomo la edad 
	var edad;
	
	edad = txtIdEdad.value;
	//OPERADORES LOGICOS
	//&& || !
	/* Tabla Verdad
       A       B       ||     &&     !A
	  true    true    true   true    false
	  true    false   true   false   false
	  false   true    true   false   true
	  false   false   false  false   true
	*/
	 

	/*if( edad >= 13 && edad <= 17){
		alert("Es adolescente");
	}*/

	/*if(edad <=17){//Anidamos un if dentro de otro

	}
	if(edad >=13){
		alert("Es adolescente");
	}*/

	//Dado tres numeros mostrar por alert el mayor
	//Laura Eiras

	var numeroUno = 12;
	var numeroDos = 2;
	var numeroTres = 22;

	numeroUno = prompt("Ingrese numero 1");
	numeroDos = prompt("Ingrese numero 2");
	numeroTres = prompt("Ingrese numero 3");

	if(numeroUno > numeroDos && numeroUno > numeroTres ){
		alert(numeroUno);
	}else{
		if(numeroDos > numeroUno && numeroDos > numeroTres){
			alert(numeroDos);
		}else{
			alert(numeroTres);
		}

	}

}//FIN DE LA FUNCIÓN