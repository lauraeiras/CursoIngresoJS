/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	dividendo=txtIdNumeroDividendo.value;
	divisor=txtIdNumeroDivisor.value;

	resto=parseInt(dividendo) % parseInt(divisor);// % Resto de una división entre enteros (en otros lenguajes mod)

	alert("El resto es "+resto);
}
