/*al presionar el botón pedir un número. mostrar 
los numeros divisores desde el 1 al número ingresado, y mostrar la 
cantidad de numeros divisores encontrados.*/
function mostrar()
{
	var numero;
	var divisores = 0;
	
	do{
		numero = prompt("Ingresar numero");
		numero = parseInt(numero);
	}while(isNaN(numero) || numero < 0);

	for(var contador = 1;contador <= numero ;contador++){
		if(numero % contador == 0){
			console.log(contador);
			divisores++;
		}
	}
	
	console.log("La cantidad de divisores es : "+divisores);

	


}//FIN DE LA FUNCIÓN