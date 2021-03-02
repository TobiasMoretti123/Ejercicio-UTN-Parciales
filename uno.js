
/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar()
{
	var tipoProductos;
	var precioProducto;
	var cantidadDeProducto;
	var marcaDelProducto;
	var fabricanteProducto;
	var masCaroJabones;
	var cantidadDeJabonesMaximo;
	var maximoJabonFabricante;
	var cantidadBarbijo;
	var cantidadAlcohol;
	var cantidadJabon;
	var acumuladorPrecio;
	var promedioProducto;
	var banderaJabones;

	acumuladorPrecio = 0
	cantidadBarbijo = 0
	cantidadAlcohol = 0
	cantidadJabon = 0
	banderaJabones = false

	for(var i=0;i<5;i++)
	{
		tipoProductos = prompt("Ingrese tipo de producto entre barbijo , jabón o alcohol");
	if(isNaN(tipoProductos)==false||tipoProductos!="barbijo"&&tipoProductos!="jabon"&&tipoProductos!="alcohol") 
	{
		alert ("Error, reingrese datos");
		break;
	}

	precioProducto = prompt("Ingrese precio del producto entre 100 y 300");
	precioProducto = parseInt(precioProducto);
	if (isNaN(precioProducto)==true||precioProducto<100||precioProducto>300) 
	{
		alert ("Error, reingrese datos");
		break;
	}

	cantidadDeProducto = prompt("Ingrese cantidad del producto");
	cantidadDeProducto = parseInt(cantidadDeProducto);
	if (isNaN(cantidadDeProducto)==true||cantidadDeProducto<1||cantidadDeProducto>1000) 
	{
		alert("Error, reingrese datos");
		break;
	}

	marcaDelProducto = prompt("Ingrese la marca del producto");
	fabricanteProducto = prompt("Ingrese el fabricante del producto");

		switch (tipoProductos) 
		{
			case "alcohol":
				cantidadAlcohol = cantidadAlcohol + cantidadDeProducto
				break;
			case "barbijo":
				cantidadBarbijo = cantidadBarbijo + cantidadDeProducto
				break;
			case "jabon":
				cantidadJabon = cantidadJabon + cantidadDeProducto
				break;
		}
		
			if (banderaJabones==false&&tipoProductos=="jabon") 
			{
				masCaroJabones = precioProducto;
				cantidadDeJabonesMaximo = cantidadJabon;
				maximoJabonFabricante = fabricanteProducto;
				banderaJabones == true
			}
			else
			{
				if (precioProducto>masCaroJabones&&cantidadDeJabonesMaximo<cantidadJabon) 
				{
					masCaroJabones = precioProducto;
					cantidadDeJabonesMaximo = cantidadJabon;
					maximoJabonFabricante = fabricanteProducto;
				}
			}
		acumuladorPrecio = acumuladorPrecio + precioProducto;
	}

	if (cantidadJabon == 0 ) 
		{
			alert("No se ingreso ningun jabon")
		}
		else
		{
			document.write("a) El más caro de los jabones de fabricante "+maximoJabonFabricante+" con un precio de "+masCaroJabones+" $ con una cantidad de "+cantidadDeJabonesMaximo);
		}

	if (cantidadJabon>cantidadAlcohol&&cantidadJabon>cantidadBarbijo) 
	{
		promedioProducto = acumuladorPrecio/cantidadJabon;
		document.write("<br/>b) El producto con mas unidades es el jabon con un promedio de: "+promedioProducto)
	}
	else
	{
		if (cantidadBarbijo>cantidadAlcohol) 
		{
			promedioProducto = acumuladorPrecio/cantidadBarbijo;
			document.write("<br/>b) El producto con mas unidades es el barbijo con un promedio de: "+promedioProducto)
		}
		else
		{
			promedioProducto = acumuladorPrecio/cantidadAlcohol;
			document.write("<br/>b) El producto con mas unidades es el alcohol con un promedio de: "+promedioProducto)
		}
	}
	document.write("<br/>c) La cantidad de barbijos comprados fue de: "+cantidadBarbijo)
}
