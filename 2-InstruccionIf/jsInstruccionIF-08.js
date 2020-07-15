function mostrar()
{
	//tomo la edad  
	var edad;
	var estCivil;

	edad = txtIdEdad.value;
	estCivil = document.getElementById("estadoCivil").value;

	if ( edad < 18 && estCivil != "Soltero" )
		{

		}
	
		else
			{
				if(edad > 18 && estCivil == "Soltero")
					{
						alert("Es soltero y no es menor");

					}
					
		
			}
			

}//FIN DE LA FUNCIÓN