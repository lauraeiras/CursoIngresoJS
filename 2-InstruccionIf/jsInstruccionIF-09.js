function mostrar()
{
	var numeroRandom;
	var max;
	var min;

	max = 11;
	min = 1;

	numeroRandom = Math.floor(Math.random()*(max-min))+min;//el minimo esta incluido y el maximo no
	//Genero el número RANDOM entre 1 y 10 
	//Usar Math.random, cada vez que lo ejecuto me tira un numero random
	 //Al multiplicarlo por 10, tengo un número entre 0 y 9.99
	/*Para redondear .floor(redondea hacia abajo)
	Math.floor(Math.random()*10)+1;(redondeo hacia arriba)
	Math.floor(Math.random()*(max-min)+min;*/

	

	
		console.log(numeroRandom);
	

}//FIN DE LA FUNCIÓN