/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de variables
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var legajo;
	var nacionalidad;

	edadIngresada = prompt("Ingrese edad entre 18 y 90 años");
	edadIngresada = parseInt(edadIngresada);

	while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90) {
		edadIngresada = prompt("Ingrese edad valida entre 18 y 90");
		edadIngresada = parseInt(edadIngresada);
	}

	sexoIngresado = prompt("Ingrese sexo F o M");// sexo se valida con &&
	while (sexoIngresado != "M" && sexoIngresado != "F") {
		sexoIngresado = prompt("Ingrese sexo valido");
		
	}

	estadoCivilIngresado = prompt("Ingrese estado civil");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
	while (isNaN(estadoCivilIngresado) || estadoCivilIngresado < 1 || estadoCivilIngresado > 4) {
		estadoCivilIngresado = prompt("1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	
	}

	sueldoBruto = prompt("Ingrese sueldo no menor a 8000");
	sueldoBruto = parseInt(sueldoBruto);
	while (isNaN(sueldoBruto) || sueldoBruto < 8000) {
		sueldoBruto = prompt("Ingrese sueldo valido");
		sueldoBruto = parseInt(sueldoBruto);
	}

	legajo = prompt("Ingrese legajo");
	legajo = parseInt(legajo);
	while (isNaN(legajo) || legajo < 1000 || legajo > 9999) {
		legajo = prompt("Ingrese legajo entre 1000 y 9999");
		legajo = parseInt(legajo);
	}

	nacionalidad = prompt("Ingrese nacionalidad");
	while (nacionalidad != "A" && nacionalidad != "N" && nacionalidad != "E") {
		nacionalidad = prompt("ingrese nacionalidad correcta");

	}
	switch (estadoCivilIngresado) {
		case 1:
			estadoCivilIngresado = "Soltero";
			break;
		case 2:
			estadoCivilIngresado = "Casado";
			break;
		case 3:
			estadoCivilIngresado = "Divorciado";
			break;
		case 4:
			estadoCivilIngresado = "Viudo";
			break;
	}
	switch (nacionalidad) {
		case "A":
			nacionalidad = "Argentina";
			break;
		case "N":
			nacionalidad = "Nacionalizado";
			break;
		case "E":
			nacionalidad = "Extranjero";
			break;
	}

	txtIdEdad.value = edadIngresada;
	txtIdSexo.value = sexoIngresado;
	txtIdEstadoCivil.value = estadoCivilIngresado;
	txtIdSueldo.value = sueldoBruto;
	txtIdLegajo.value = legajo;
	txtIdNacionalidad.value = nacionalidad;


}
