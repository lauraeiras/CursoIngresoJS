function mostrar()
{
	//tomo la edad
	var edad;

	edad = txtIdEdad.value;
	/* voy a poner primero la condicion que pueda ser mas probable verdadera.
	asi no entraria en los otros if/ solo es por n tema de rendimiento*/
	
	if( edad >= 18 ){// ya evalue si es mayor
		alert("Es mayor de edad");

	}else{
			if( edad >= 13 ){// no vuelvo a preguntar si es mayor pq ya lo descarte antes
			alert("Es adolescente");
		}else{
				alert("Es un niño");

			}

		}
		

}//FIN DE LA FUNCIÓN