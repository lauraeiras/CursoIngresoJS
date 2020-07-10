/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var dato1;
	var dato2;
	var suma;
	
	dato1=txtIdNumeroUno.value;
	dato2=txtIdNumeroDos.value;
	suma=parseInt(dato1)+parseInt(dato2);

	alert("La suma es "+suma);
}

