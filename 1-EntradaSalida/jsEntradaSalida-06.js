/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var dato1;
	var dato2;
	var suma;
	
	//le asigno un valor
	dato1 = txtIdNumeroUno.value;
	dato2 = txtIdNumeroDos.value;

	//parseo despues de darle un valor
	dato1 = parseInt(dato1);
	dato2 = parseInt(dato2);

	suma = dato1 + dato2 ;

	alert("La suma es "+suma);
	 
}

