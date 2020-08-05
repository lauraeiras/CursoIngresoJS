/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar() {
	var nombre;
	var sexo;
	var edad;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var temperaturaMaxima;
	var nombreTemperaturaMaxima;

	respuesta = "si";
	temperaturaMaxima = 0;

	while (respuesta == "si") {
		nombre = prompt("Ingrese nombre");
		do {
			sexo = prompt("ingrese sexo");

		}while(sexo != "f" && sexo != "m");

		do{
			edad=prompt("Ingrese edad");
			edad= parseInt(edad);
		}while(isNaN(edad));
		do{
			estadoCivil = prompt("Ingrese soltero, casado o viudo");
		}while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");
		do{
			temperatura = prompt("Ingrese temperatura");
			temperatura = parseInt(temperatura);
		}while(isNaN(temperatura) || temperatura < 0);

		respuesta=prompt("ingrese s para seguir ");

	
		//if(temperatura > temperaturaMaxima){
			//temperaturaMaxima = temperatura;
			//nombreTemperaturaMaxima = nombre;
		
	}// fin while



}
