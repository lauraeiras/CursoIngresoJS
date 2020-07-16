/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tempFahr;
    var tempCent;

    tempFahr = txtIdTemperatura.value;
    tempCent = (tempFahr - 32) * 5/9;

    tempFahr = parseInt(tempFahr);
    tempCent = parseInt(tempCent);

    alert( tempFahr + " Fahrenheit son " + tempCent + " Centigrados");


	
}

function CentigradosFahrenheit () 
{
    var tempFahr;
    var tempCent;

    tempCent = txtIdTemperatura.value;
    tempFahr = (tempCent * 9/5) + 32;

    tempFahr = parseInt(tempFahr);
    tempCent = parseInt(tempCent);

    alert( tempCent + " Centigrados son " + tempFahr + " Fharenheit");
	
}
