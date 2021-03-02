/*
"super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d) el tipo de mercadería  que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado*/
function mostrar()
{
	var tipoDeMercaderia;
	var nombreProducto;
	var importeProducto;
	var procedenciaProducto;
	var pesoProducto;
	var contadorLimpieza;
	var contadorComestible;
	var contadorOtros;
	var nombreDelMasPesadoComestibles;
	var masPesadoComestibles;
	var elMasCaro;
	var elNombreDelMasCaro;
	var elMasBarato
	var nombreDelMasBaratoElaborados;
	var porcentajeElaborados;
	var acumuladorElaborados;
	var contadorProcedencia;
	var acumuladorLimpieza;
	var acumuladorComestibles;
	var acumuladorOtros;
	var promedioLimpieza;
	var promedioComestible;
	var promedioOtros;
	var flag = true;
	var respuesta;

	contadorLimpieza = 0;
	contadorComestible = 0;
	contadorOtros = 0;
	acumuladorElaborados = 0;
	contadorProcedencia = 0;
	acumuladorLimpieza = 0;
	acumuladorComestibles = 0;
	acumuladorOtros = 0;
	respuesta = "si";

	while (respuesta == "si") 
	{
		tipoDeMercaderia = prompt("Ingrese tipo de mercaderias limpieza , comestible , otros");
		while (isNaN(tipoDeMercaderia)==false||tipoDeMercaderia!="limpieza"&&tipoDeMercaderia!="comestible"&&tipoDeMercaderia!="otros") 
		{
			alert("Error no escribio el tipo correctamente");
		}

		nombreProducto = prompt("Ingrese el nombre del producto");

		importeProducto = prompt("Ingrese el importe del producto no mayor a 1000 pesos");
		importeProducto = parseInt(importeProducto);
		while (isNaN(importeProducto)||importeProducto>1000) 
		{
			alert("Error el importe no puede superar los 1000pesos");
		}

		procedenciaProducto = prompt("Ingrese procedencia del producto importado, nacional, elaborado");
		while (isNaN(procedenciaProducto)==false||procedenciaProducto!="importado"&&procedenciaProducto!="nacional"&&procedenciaProducto!="elaborado") 
		{
			alert("Error ingreso mal la procedencia");
		}

		pesoProducto = prompt("Ingrese peso del producto no mayor a 30 kilos");
		pesoProducto = parseInt(pesoProducto);
		while (isNaN(pesoProducto)||pesoProducto>30) 
		{
			alert("Error el peso no puede ser mayor a 30kg");
		}

		switch (tipoDeMercaderia) 
		{
			case "comestible":
				contadorComestible++;
				acumuladorComestibles = acumuladorComestibles + contadorComestible;
				if (contadorComestible==1||pesoProducto>masPesadoComestibles) 
				{
					masPesadoComestibles = pesoProducto;
					nombreDelMasPesadoComestibles = nombreProducto;
				}
				break;
			case "limpieza":
				contadorLimpieza++;
				acumuladorLimpieza = acumuladorLimpieza + contadorLimpieza;
				break;
			case "otros":
				contadorOtros++;
				acumuladorOtros = acumuladorOtros + contadorOtros;
				break;
		}
		if (flag == true) 
		{
			elNombreDelMasCaro = nombreProducto;
			elMasCaro = importeProducto;
			elMasBarato = importeProducto;
			nombreDelMasBaratoElaborados = nombreProducto;
			flag = false;
		} 
		else
		{
				if (elMasCaro<importeProducto)
			{
				elNombreDelMasCaro = nombreProducto;
				elMasCaro = importeProducto;
			}
			else
			{
				if (elMasBarato>importeProducto&&procedenciaProducto=="elaborado") 
				{
					elMasBarato = importeProducto;
					nombreDelMasBaratoElaborados = nombreProducto;
				}
			}
		}
		
		if (procedenciaProducto=="elaborado") 
		{
			contadorProcedencia++;
			acumuladorElaborados = acumuladorElaborados + contadorProcedencia++;
		}
		else
		{
			contadorProcedencia++;
		}
		respuesta=prompt("Desea agregar otro producto? si/no");
	}
	
	document.write(
	"a)El nombre del producto mas pesado de los comestibles es: "+nombreDelMasPesadoComestibles+" Con un peso de "+masPesadoComestibles+"Kg",
	"<br/>b)El nombre del producto mas caro de todo es: "+elNombreDelMasCaro+" Con un valor de "+elMasCaro+"$",
	"<br/>c)El nombre del  mas barato de los elaborados: "+nombreDelMasBaratoElaborados+" Con un valor de "+elMasBarato+"$");

	if (contadorComestible>contadorLimpieza&&contadorComestible>contadorOtros) 
	{
		document.write("<br/>d) Comestibles es el que mas aparece");
	}
	else
	{
		if (contadorLimpieza>contadorOtros) 
		{
			document.write("<br/>d) Limpieza es el que mas aparece");
		}
		else
		{
			document.write("<br/>d) Otros es el que mas aparece");
		}
	}
	
	porcentajeElaborados = ((acumuladorElaborados*contadorProcedencia)/100);
	document.write("<br/>e) El porcentaje de productos elaborados por sobre el total es igual a: "+porcentajeElaborados+"%");

	promedioComestible = acumuladorComestibles/contadorComestible;
	document.write("<br/>f) El promedio de los productos comestibles es: "+promedioComestible);

	promedioLimpieza = acumuladorLimpieza/contadorLimpieza;
	document.write("<br/>f) El promedio de los productos de limpieza es: "+promedioLimpieza);

	promedioOtros = acumuladorOtros/contadorOtros;
	document.write("<br/>f) El promedio de los otros productos es: "+promedioOtros);
}


