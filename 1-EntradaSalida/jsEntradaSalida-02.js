/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;                            // declaro mi variable
	nombre = prompt("Ingrese su nombre");  // prompt(toma datos de usuario),hago tantos prompt segun datos sean necesarios
	alert("Su nombre es : "+nombre);      // alert(muestra msj en pantalla)el espacio va dentro de las ""
}

