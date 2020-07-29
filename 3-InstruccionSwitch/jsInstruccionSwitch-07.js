/*Enunciado:
Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra Norte,
 Sur, Este u Oeste
 Bariloche-
 Cataratas-
 Mar del Plata
 Ushuaia*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	

	switch(destinoIngresado){
		case "Bariloche":
			alert("Se encuentra en el Este de Argentina")
			break;
		case "Cataratas":
			alert("Se encuentra en el Norte de Argentina")
			break;
		case "Mar del plata":
			alert("Se encuentra en el Oeste de Argentina")
			break;
		case "Cordoba":
			alert("Se encuentra al sur de Argentina");
			break;

	}

}//FIN DE LA FUNCIÓN