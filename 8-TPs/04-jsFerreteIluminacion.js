/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var lampara = 35;
    var cantLamparas;
    var marca;
    var descuento;
    var impuestoIIBB;
    var importeFinal;



    cantLamparas = txtIdCantidad.value;
    marca = document.getElementById("Marca").value;

    cantLamparas = parseInt(cantLamparas);

    /*if(cantLamparas >= 6){
        descuento = cantLamparas * lampara * 0.50;    
    }else{
        if(cantLamparas >= 5 && marca == "ArgentinaLuz"){
            descuento = cantLamparas * lampara * 0.60;
        }else{
            if(cantLamparas >= 5 && marca != "ArgentinaLuz"){ 
                descuento = cantLamparas * lampara * 0.70;
            }else{
                if(cantLamparas ==4 && marca =="ArgentinaLuz" || marca == "FelipeLamparas"){
                    descuento = cantLamparas * lampara * 0.75;
                    }   else{
                           if(cantLamparas ==4 && marca !="ArgentinaLuz" || marca != "FelipeLamparas"){ 
                               descuento = cantLamparas * lampara * 0.80;
                                   }else{
                                      if(cantLamparas == 3 && marca == "ArgentinaLuz"){
                                        descuento = cantLamparas * lampara * 0.85;
                                            }else{ 
                                                if(cantLamparas == 3 && marca == "FelipeLamparas"){
                                                    descuento = cantLamparas * lampara * 0.90;
                                                }else{
                                                    if(cantLamparas == 3 && marca != "ArgentinaLuz" || cantLamparas  != "FelipeLamparas"){        

                                                        descuento = cantLamparas * lampara * 0.95;
                                                    }
                                                }

                                            }
                   
                                        }
                                    } 
                                }
                            }          
            
                        }   
        
        
                        txtIdprecioDescuento.value = descuento;
 
        
        
        impuestoIIBB = descuento * 1.10 - descuento;
        importeFinal = descuento + impuestoIIBB;

        if(descuento > 120){
            alert("IIBB Usted pago "+importeFinal+", siendo "+impuestoIIBB+"  el impuesto que se pagó.")
        }*/

    /*if (cantLamparas >= 6) {
        descuento = cantLamparas * lampara * 0.50;
    } else if (cantLamparas == 5 && marca == "ArgentinaLuz") {
        descuento = cantLamparas * lampara * 0.60;
    } else if (cantLamparas == 5) {
        descuento = cantLamparas * lampara * 0.70;
    } else if (cantLamparas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
        descuento = cantLamparas * lampara * 0.75;
    } else if (cantLamparas == 4) {
        descuento = cantLamparas * lampara * 0.80;
    } else if (cantLamparas == 3 && marca == "ArgentinaLuz") {
        descuento = cantLamparas * lampara * 0.85;
    } else if (cantLamparas == 3 && marca == "FelipeLamparas") {
        descuento = cantLamparas * lampara * 0.90;
    } else if (cantLamparas == 3) {
        descuento = cantLamparas * lampara * 0.95;
    }// shift + alt + f // te acomoda el codigo:



    txtIdprecioDescuento.value = descuento;



    impuestoIIBB = descuento * 1.10 - descuento;
    importeFinal = descuento + impuestoIIBB;

    if (descuento > 120) {
        alert("IIBB Usted pago " + importeFinal + ", siendo " + impuestoIIBB + "  el impuesto que se pagó.")
    }*/

    switch (cantLamparas) {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = cantLamparas * lampara * 0.85;
            } else {
                if (marca == "FelipeLamparas") {
                    descuento = cantLamparas * lampara * 0.90;
                } else {
                    if (marca != "ArgentinaLuz" || cantLamparas != "FelipeLamparas") {

                        descuento = cantLamparas * lampara * 0.95;
                    }
                }
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = cantLamparas * lampara * 0.75;
            } else {
                if (marca != "ArgentinaLuz" || marca != "FelipeLamparas") {
                    descuento = cantLamparas * lampara * 0.80;
                }
            }

            break;
        case 5:
            if (cantLamparas >= 5 && marca == "ArgentinaLuz") {
                descuento = cantLamparas * lampara * 0.60;
            } else {
                if (cantLamparas >= 5 && marca != "ArgentinaLuz") {
                    descuento = cantLamparas * lampara * 0.70;
                }
            }
                break;
        default:
            descuento = cantLamparas * lampara * 0.50;
            break;


    }

    txtIdprecioDescuento.value = descuento;



    impuestoIIBB = descuento * 1.10 - descuento;
    importeFinal = descuento + impuestoIIBB;

    if (descuento > 120) {
        alert("IIBB Usted pago " + importeFinal + ", siendo " + impuestoIIBB + "  el impuesto que se pagó.")
    }


}
