function mostrar() {
  var tipo;
  var cantidad;
  var precio;
  var respuesta;
  var descuento;
  var cantArena;
  var cantCemento;
  var cantCal;
  var cantTotal;
  var masBolsas;
  var acumPrecio;

  respuesta = "s";
  cantArena = 0;
  cantCal = 0;
  cantCemento = 0;
  cantTotal = 0;
  acumPrecio = 0;


  do{
    do {
      tipo = prompt("Ingrese arena,cal o cemento");

    } while (tipo != "arena" && tipo != "cal" && tipo != "cemento");

    do {
      cantidad = prompt("Ingrese cantidad");
      cantidad = parseInt(cantidad);
    } while (isNaN(cantidad) || cantidad < 1);

    do {
      precio = prompt("Ingrese precio");
      precio = parseInt(precio);
    } while (isNaN(precio) || precio < 1);

    switch (cantidad) {
      case "arena":
        cantArena++;
        break;
      case "cal":
        cantCal++;
        break;
      case "cemento":
        cantCemento++;
        break;
    }
    cantTotal = cantTotal + cantidad;

  
    if (cantTotal > 10 && cantTotal < 30) {
      acumPrecio = acumPrecio * precio;
      descuento = acumPrecio * 0.85;
  
    } else if (cantTotal > 30) {
      acumPrecio = acumPrecio + precio;
      descuento = acumPrecio * 0.70;
    } else {
      acumPrecio = acumPrecio + precio;
      descuento = " ";
    }

    
  if (cantArena > cantCal && cantArena > cantCemento) {
    tipo=cantArena;
  } else {
    if (cantCal > cantCemento) {
      tipo = cantCal;
    }
    else {
      tipo=cantCemento;
      }
    }


    respuesta = confirm("Desea continuar");
  } while (respuesta); //fin while
  




  

  

  document.write("El importe total bruto sin descuento " + acumPrecio + " con descuento " + descuento + "<br>");
  document.write("El tipo con mas cantidad de bolsas es " + tipo + "<br>");



}
