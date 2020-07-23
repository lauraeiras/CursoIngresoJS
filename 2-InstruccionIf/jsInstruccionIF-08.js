function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;

	edad = txtIdEdad.value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad >= 18 && estadoCivil == "Soltero"){
		alert("Es soltero y no es menor");
	}else{

	}

	/*puedo usar console.log para ver por consola el valor de la variable
	console.log(edad);
	console.log(estadoCivil);*/

			

}//FIN DE LA FUNCIÓN
