function mostrar()
{
	//tomo la edad
	var edad;
	edad = txtIdEdad.value;
	
	/*if( edad <13 || edad > 17){
		alert("NO es adoslecente");

	}*/
	if(!( edad <13 || edad > 17)){ //niego la condicion entera y busco el intervalo contrario.
		alert("NO es adoslecente");

	}
	
	

}//FIN DE LA FUNCIÓN