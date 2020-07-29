/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
//while,iterador,bucle.
function mostrar() {

	/**
	 * contador: Variable mas una constante.
	 * contador = contador + 1;
	 * contador += 1;
	 * contador++; Solo permite sumar uno/operador 
	 * ++contador; pre-incremento;/ primero suma y despues muestra
	 * 
	 * acumulador: Variable mas otra variable.
	 * acumulador = acumulador + otraVariable;
	 * acumulador += otravariable;
	 * 
	 * contador y acumulador se inicializan siempre;
	 * 
	 * bandera:
	 * 
	 */
	var contador = 0;//inicializar el contador(Primero imprime y despues suma)


	while (contador < 10) {
		
		contador = contador + 1;// variable + constante.
		console.log("Contador", contador);

	}


}//FIN DE LA FUNCIÓN