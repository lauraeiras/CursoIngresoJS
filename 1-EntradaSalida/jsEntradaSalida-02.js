/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

/*
function mostrar()
{
	var nombre;                            // declaro mi variable
	
	nombre = prompt("Ingrese su nombre");  // prompt(toma datos de usuario),hago tantos prompt segun datos sean necesarios
	
	alert("Su nombre es : "+nombre);      // alert(muestra msj en pantalla)el espacio va dentro de las ""

}


function mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var superficie;

	ancho = prompt("Ingrese ancho del terreno");
	largo = prompt("Ingrese largo del terreno");

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = (ancho * 2) + (largo * 2);
	superficie = ancho * largo;

	alert("el terreno tiene "+ ancho+ " x "+  largo+" su perimetro total es de " +perimetro+"metros"+" y la superficie es de "+superficie);




}

/*Eiras laura
ejercicio 03:
se pide dos importes, y un porcentaje de descuento (todo con prompt)
y se muestra el siguiente mensaje:
"los prodcutos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"*/


/*function mostrar()

{
	var importe1;
	var importe2;
	var porcentajeDesc;
	var suma;
	var descuento;
	var precioConDescuento;
	var iva;
	var finalIva;



	importe1 = prompt("Ingrese importe");
	importe2 = prompt("Ingrese importe");
	porcentajeDesc = prompt("Ingrese porcentaje");

	importe1 = parseInt(importe1);
	importe2 = parseInt(importe2);
	porcentajeDesc = parseInt(porcentajeDesc);
	iva = parseInt(iva);

	suma = importe1 + importe2;
	descuento = (suma * porcentajeDesc / 100);
	precioConDescuento = (suma - descuento)  ;
	iva = precioConDescuento * 21 /100;
	finalIva = (precioConDescuento * iva / 100) + suma;


	alert("los prodcutos cuestan $ " +importe1+ " y $ "+importe2+ " sumados son $ "+suma+" tienen un descuento de $ "+descuento+" pesos "+", el precio total con descuento es $ "+precioConDescuento+" ,el iva es de $"+iva+" y el precio final con IVA es $"+finalIva);



}*/


	/*jercicio 01:
Eiras

se ingresa nombre del producto , el importe y el porcentaje de aumento a aplicar (por prompt).
y semuestra el siguient mensaje(por alert):
"el producto XXXX cuesta $xxxx sin aumento, tiene aumento de $XXXX y el precio final es: $xxxx, gracias por su compra"*/

function mostrar()
{
    var nombre;
    var importe;
    var aumento;
    var masAumento;
    
    
    nombre = prompt("Ingrese producto");
    importe = prompt("Ingrese importe");
    aumento = prompt("Ingrese Porcentaje");
    
    importe = parseInt(importe);
    aumento = parseInt(aumento);
	masAumento = parseInt(masAumento);
	
    aumento = importe * aumento /100;
    masAumento = importe + aumento;
    
    alert("el producto "+nombre+" cuesta $"+importe+" sin aumento ,tiene aumento de $"+aumento+" y el precio final es: $"+masAumento+"  gracias por su compra");
    
    
    
	
	
}
