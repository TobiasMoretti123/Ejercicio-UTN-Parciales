/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/
function mostrar()
{
  var tipoProducto;
  var cantidadDeBolsas;
  var precioPorBolsa;
  var descuento;
  var importeTotalConDescuento;
  var importeTotal;
  var acumuladorPrecio;
  var cantidadArena;
  var cantidadCal;
  var cantidadCemento;
  var masCaro;
  var tipoMasCaro;
  var respuesta;
  var elTipoDeMascantidad;
  var masCantidad;
  var banderaCantidad;

  cantidadArena = 0;
  cantidadCal = 0;
  cantidadCemento = 0;
  acumuladorPrecio = 0;
  banderaCantidad = true;
  respuesta = "si";
  
  while (respuesta=="si") 
  {
    tipoProducto = prompt("Ingrese tipo de producto: arena ; cal; cemento")
    while (isNaN(tipoProducto)==false||tipoProducto!="arena"&&tipoProducto!="cal"&&tipoProducto!="cemento") 
    {
      tipoProducto = prompt("Error ingrese arena , cal o cemento ");
    }

    cantidadDeBolsas = prompt("Ingrese cantidad de bolsas a comprar")
    cantidadDeBolsas = parseInt(cantidadDeBolsas)
    while (isNaN(cantidadDeBolsas)==true||cantidadDeBolsas<0) 
    {
      cantidadDeBolsas = prompt("Error ingrese una cantidad valida");
    }

    precioPorBolsa = prompt("Ingrese precio por bolsa");
    precioPorBolsa = parseInt(precioPorBolsa);
    while (isNaN(precioPorBolsa)==true||precioPorBolsa<0) 
    {
      precioPorBolsa = prompt("Error ingrese un precio valido")
    }

    if (cantidadDeBolsas>10) 
    {
      descuento = 15;
    }
    else
    {
      if (cantidadDeBolsas>30) 
      {
        descuento = 25;
      }
    }

    switch (tipoProducto) 
    {
      case "cal":
        cantidadCal = cantidadCal + cantidadDeBolsas;
        break;
      case "arena":
        cantidadArena = cantidadArena + cantidadDeBolsas;
        break;
      case "cemento":
        cantidadCemento = cantidadCemento + cantidadDeBolsas;
    }
    if (banderaCantidad==true) 
    {
      elTipoDeMascantidad = tipoProducto;
      tipoMasCaro = tipoProducto;
      masCaro = precioPorBolsa;
      masCantidad = cantidadDeBolsas;
      banderaCantidad = false;
    }
    else
    {
      if (cantidadDeBolsas>masCantidad) 
      {
        elTipoDeMascantidad = tipoProducto;
        masCantidad = cantidadDeBolsas;
      }
      if (precioPorBolsa>masCaro) 
      {
          tipoMasCaro = tipoProducto;
          masCaro = precioPorBolsa;
      }
    }
    respuesta = prompt ("Desea agregar mas productos si/no");
    acumuladorPrecio = acumuladorPrecio + precioPorBolsa; 
  }

  importeTotalConDescuento = acumuladorPrecio - acumuladorPrecio*descuento/100;
  importeTotal = acumuladorPrecio;

  document.write("a) El importe total es de: "+importeTotal)

  if (descuento==0) 
  {
    document.write("<br/>No se efectuo ningun descuento")
  }
  else
  {
    document.write("<br/>b) El importe total con descuento es de: "+importeTotalConDescuento)
  }

  document.write("<br/>d) El tipo de producto con mas cantidad es: "+elTipoDeMascantidad+" con una cantidad de "+masCantidad,
  "<br/>f) El tipo de producto mas caro es: "+tipoMasCaro+" con un precio de "+masCaro+"$")
}
