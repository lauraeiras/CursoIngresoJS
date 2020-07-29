/*Enunciado:
Al seleccionar un destino informar 
si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado){
		case "Bariloche":
		case "Cordoba":	
			alert("Hace FRIO")
			break;
		default:
			alert("Hace Calor");
			break;

	}



}//FIN DE LA FUNCIÓN