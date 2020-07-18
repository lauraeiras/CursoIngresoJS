function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	

	var nota;

	nota = Math.floor(Math.random()*11);
	console.log(nota);

	if(nota == 9 || nota == 10  )
	{
		alert("EXCELENTE");

	}
	else
	{  

	if(nota >= 4)
		{
			alert("APROBÓ");
		}
		else
			{
				//if(nota < 4)// no es necesario

				//{
					alert("Vamos,la proxima se puede");
				//}

			}
	 
	}
	

}//FIN DE LA FUNCIÓN