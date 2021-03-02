/*1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?*/
function probarEjercicio()
{
	var nombreIngresado;
	var carreraIngresada;
	var estadoIngresado;
	var sexoIngresado;
	var edadIngresada;
	var notaIngresada;
	var contadorProgramacion;
	var contadorPsicologia;
	var contadorDisenio;
	var contadorProgramadorasEnCurso;
	var contadorNoBinario;
	var acumuladorNotasFinalizantes;
	var contadorDeAlumnosFinalantes;
	var promedioFinalizantes;
	var nombreMasViejo;
	var sexoMasViejo;
	var edadDelAlumnoMasViejo;
	var nombreMejorAlumno;
	var notaDelMejorAlumno;
	var estadoDelMejorAlumno;
	var banderaPsicologiaNoBinario;
	var respuesta;

	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorDisenio = 0;
	contadorProgramadorasEnCurso = 0;
	contadorNoBinario = 0;
	acumuladorNotasFinalizantes = 0;
	contadorDeAlumnosFinalantes = 0;
	banderaPsicologiaNoBinario = false;
	respuesta = "si";

	while (respuesta == "si") 
	{
		nombreIngresado = prompt("Ingrese nombre");

		carreraIngresada = prompt("Ingrese carrera entre Programación, Psicología y Diseño gráfico");
		while(carreraIngresada!="Programación"&&carreraIngresada!="Psicología"&&carreraIngresada!="Diseño gráfico")
		{
			carreraIngresada = prompt("Error, reingrese carrera");
		}

		estadoIngresado = prompt("Ingrese  estado carrera entre en curso-abandono-finalizado");
		while(estadoIngresado!="en curso"&&estadoIngresado!="abandono"&&estadoIngresado!="finalizado")
		{
			carreraIngresada = prompt("Error, reingrese estado");
		}

		sexoIngresado = prompt("ingrese su sexo entre femenino-masculino-nobinario");
		while (sexoIngresado!="femenino"&&sexoIngresado!="masculino"&&sexoIngresado!="nobinario") 
		{
			sexoIngresado = prompt("Error reingrese, sexo")
		}

		edadIngresada = prompt("Ingrese edad 18 o más");
		edadIngresada = parseInt(edadIngresada);
		while (edadIngresada<18) 
		{
			edadIngresada = prompt("Error, reingrese edad");	
		}

		notaIngresada = prompt("Ingrese una nota entre 1 y 10");
		notaIngresada = parseInt(notaIngresada);
		while (notaIngresada<1||notaIngresada>10) 
		{
			notaIngresada = prompt("Error, reingrese nota");	
		}

		switch (carrera) 
		{
			case "Programación":
				contadorProgramacion++;
				if (sexoIngreso=="femenino"&&estadoIngresado=="curso") 
				{
					contadorProgramadorasEnCurso++
				}
				break;
			case "Psicología":
				contadorPsicologia++;
				if (contadorPsicologia==1||edadIngresada>edadDelAlumnoMasViejo) 
				{
					edadDelAlumnoMasViejo = edadIngresada;
					sexoMasViejo = sexoIngresado;
					nombreMasViejo = nombreIngresado;
				}
				if (sexoIngresado=="nobinario") 
				{
					if (banderaPsicologiaNoBinario==false||notaIngresada>notaDelMejorAlumno) 
					{
						notaDelMejorAlumno = notaIngresada;
						estadoDelMejorAlumno = estadoIngresado;
						nombreMejorAlumno = nombreIngresado;
						banderaPsicologiaNoBinario = true
					}
				}
				break;
			case "Diseño gráfico":
				contadorDisenio++;
				break;
		}
		if (sexoIngresado == "nobinario") 
		{
			contadorNoBinario++
		}
		if (estadoIngresado=="finalizado") 
		{
			contadorDeAlumnosFinalantes++
			acumuladorNotasFinalizantes = acumuladorNotasFinalizantes + notaIngresada
		}

		respuesta = prompt("Desea ingresar otro alumno?si/no");
	}

	document.write
	("a) Carrera programacion tiene: "+contadorProgramacion+" alumnos",
	"<br/>Carrera Diseño Gráfico tiene: "+contadorDisenio+ " alumnos",
	"<br/>Carrera Psicología tiene: "+contadorProgramadorasEnCurso+ " alumnos",
	"<br/>b) La cantidad mujeres que cursan programacion son: "+contadorProgramadorasEnCurso,
	"<br/>c) La cantidad de alumnos no binarios es: "+contadorNoBinario,
	"<br/>e) El alumno mas viejo de Psicología es: "+nombreMasViejo+" de sexo "+sexoMasViejo+" con una edad de "+edadDelAlumnoMasViejo,
	"<br/>f) El mejor alumno no binario de Psicología es: "+nombreMejorAlumno+" con una nota de "+notaDelMejorAlumno+" y el estado de la carrera es "+estadoDelMejorAlumno);

	if (contadorDeAlumnosFinalantes!=0) 
	{
		promedioFinalizantes = acumuladorNotasFinalizantes / contadorDeAlumnosFinalantes;
		document.write("d) El promedio de las notas finalizantes es: "+promedioFinalizantes);
	}
	else
	{
		alert("No se calculo el promedio de finlaizantes ya que no se ingreso ningun alumno con esa condicion")
	}
	if (contadorProgramacion>contadorPsicologia&&contadorProgramacion>contadorDisenio) 
	{
		document.write("g) La materia con mas alumnos es Programacíon")
	}
	else
	{
		if (contadorPsicologia>contadorDisenio) 
		{
			document.write("g) La materia con mas alumnos es Psicologia")
		}
		else
		{
			document.write("g) La materia con mas alumnos es Diseño Gráfico")
		}
	}
}