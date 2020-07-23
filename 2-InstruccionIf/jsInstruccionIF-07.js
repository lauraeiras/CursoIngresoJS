function mostrar()
{
	//tomo la edad 
	var edad;
	var estadoCivil;

	edad = txtIdEdad.value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if ( edad < 18 && estadoCivil != "Soltero" ){
		alert("Es muy pequeño para No ser soltero");		
	}
	
}//FIN DE LA FUNCIÓN