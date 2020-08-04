function mostrar()
{
	var numero;
	var cantPares=0
	do{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
	}while(isNaN(numero) || numero < 0);
	
	for(var contador = 1; contador >= numero;contador++){
		if(numero % 2 == 0 || contador == 1){
			console.log(contador);
			cantPares++;
		}
	}

 alert(cantPares);

}//FIN DE LA FUNCIÓN