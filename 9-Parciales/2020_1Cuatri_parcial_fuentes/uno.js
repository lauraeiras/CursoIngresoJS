/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar() {
  var tipo;
  var precio;
  var precioMasAlto;
  var precioMasBajo;
  var cantidadUnidades;
  var marca;
  var fabricante;
  var contadorProductos;
  var cantUnidAlcohol;
  var cantUniBarbijo;
  var cantUniJabon;
  var cantAlcoholBarato;
  var cantAlcoholCaro;
  var banderaDelPrimero;
  var productoMayorCantidad;
  var promedio;
  var contadorAlcohol;
  var contadorBarbijo;
  var contadorJabon;
 

  contadorProductos = 0;
  cantUnidAlcohol = 0;
  cantUniBarbijo = 0;
  cantUniJabon = 0;
  cantidadUnidades = 0;
  cantAlcoholBarato = 0;
  cantAlcoholCaro = 0;
  acumAlcohol = 0;
  acumBarbijo = 0;
  acumJabon = 0;
  banderaDelPrimero = "si";
  contadorAlcohol = 0;
  contadorJabon = 0;
  contadorBarbijo = 0;
 

  while (contadorProductos < 5) {
    contadorProductos++;// me aseguro que salga del bucle
    tipo = prompt("Ingrese producto, jabon,alcohol o barbijo");
    marca = prompt("Ingrese marca");
    fabricante = prompt("Ingrese fabricante");
    while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
      tipo = prompt("Ingrese producto valido");
    }
    precio = prompt("Ingrese precio");
    precio = parseInt(precio);
    while (isNaN(precio) || precio < 100 || precio > 300) {
      precio = prompt("Ingrese precio valido");
      precio = parseInt(precio);
    }
    cantidadUnidades = prompt("Ingrese Unidades");
    cantidadUnidades = parseInt(cantidadUnidades);
    while (
      isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000) {
      precio = prompt("Ingrese unidades entre 1 y 1000");
      cantidadUnidades = parseInt(cantidadUnidades);
    }

    switch (tipo) {
      case "alcohol":
        contadorAlcohol++;
        cantUnidAlcohol = cantUnidAlcohol + cantidadUnidades;

        if (banderaDelPrimero == "si") {
          banderaDelPrimero = "no";
          precioMasAlto = precio;
          precioMasBajo = precio;
          cantAlcoholBarato = cantidadUnidades;
          cantAlcoholCaro = cantidadUnidades;
          precioMasAlto = fabricante;
          precioMasBajo = fabricante;
        }
        if (precio > precioMasAlto) {
          //precioMasAlto=precio;
          precioMasAlto = fabricante;
          cantAlcoholCaro = cantAlcoholCaro + cantidadUnidades;
        } else if (precio < precioMasBajo) {
          //precioMasBajo=precio;
          precioMasBajo = fabricante;
          cantAlcoholBarato = cantAlcoholBarato + cantidadUnidades;
        }
        break;
      case "barbijo":
        contadorBarbijo++;
        cantUniBarbijo = cantUniBarbijo + cantidadUnidades;

        break;
      case "jabon":
        contadorAlcohol++;
        cantUniJabon = cantUniJabon + cantidadUnidades;

        break;
    }

  }
  
  
  if (cantUniJabon > cantUnidAlcohol && cantUniJabon > cantUniBarbijo) {
    productoMayorCantidad = "jabon";
    promedio = cantUniJabon / contadorJabon;
  } else {
    if (cantUnidAlcohol > cantUniJabon && cantUnidAlcohol > cantUniBarbijo) {
      productoMayorCantidad = "alcohol";
      promedio = cantUnidAlcohol / contadorAlcohol;
    } else {
      if (cantUniBarbijo > cantUnidAlcohol && cantUniBarbijo > cantUniJabon) {
        productoMayorCantidad = "barbijo";
        promedio = cantUniBarbijo / contadorBarbijo;
      }
    }
  }


  document.write("Alcohol mas barato cantidad de unidades " + cantAlcoholBarato + " El fabricante es : " + precioMasBajo + "<br>");
  document.write("El tipo de producto con mas unidades es : " + productoMayorCantidad + " y su promedio es " + promedio + "<br>");
  document.write("La cantidad de jabones en total es: " + cantUniJabon + "<br>");
}
