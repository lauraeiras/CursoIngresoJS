/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso
 de una estacion del año y localidad para vacacionar para poder 
 calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba
 tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba 
tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento*/

function mostrar() {
	var estacionIngresada = txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var costoBase = 15000;
	var aumento;
	var descuento;

	switch (estacionIngresada) {
		case "Invierno":
			switch(destino){
				case "Bariloche":
					aumeto = costoBase * 1.20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = costoBase * 0.90;
					break;
				case "Mar del plata":
					descuento = costoBase * 0.80;		

			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					descuento = costoBase*0.80;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = costoBase*1.10;
					break;
					default:
						aumento = costoBase*1.20;
						break;


			}

			
		case "Otoño":
		case "Primavera":	
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumeto = costoBase *1.10;
					default:
						alert(costoBase);
						break;		

			}

	}




}//FIN DE LA FUNCIÓN