/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var radio;
    var alambre;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    

    

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    radio = parseInt(radio);
    alambre = parseInt(alambre);

    

    radio = ((largo * 2) + ( ancho * 2))*3;

    txtIdRadio.value = radio;
    

}
function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;

    radio = txtIdRadio.value;

    radio = parseFloat(radio);

    perimetro = 2 * Math.PI * radio;

    perimetro = Math.ceil(perimetro);
    alambre = perimetro * 3;

    alert("Cantidad de alambre " + alambre + "metros");
    
	
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cal;
    var cemento;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = (largo * ancho );
    cal = 2 * area;
    cemeno = 3 * area;

    alert("Bolsas de cal " + cal + "y " + cemento + "Bolsas de cemento");


	
}