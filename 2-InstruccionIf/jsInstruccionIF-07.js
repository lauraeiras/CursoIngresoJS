function mostrar()
{
	//tomo la edad 
	var edad;
	var estCivil;

	edad = txtIdEdad.value;
	estCivil = document.getElementById("estadoCivil").value;

	if ( edad < 18 && estCivil != "Soltero" ){
		alert("Es muy pequeño para No ser soltero");		
	}
	
}//FIN DE LA FUNCIÓN