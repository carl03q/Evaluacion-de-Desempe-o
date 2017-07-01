<?php

//Variables para introducir datos a la DB
$id= "lala";
$puntaje= 0;
	
//Llega desde el Javascript
$np = 10; //tama;o del arreglo de preguntas
$array = array(1, 1, 1, 1, 1, 1, 5, 2, 2, 2);
//$id = "lala";

$comp = 0;
for ($i = 0; $i < $np; $i++) 
{
    if( 0 < $array[$i] && $array[$i] < 6)
		echo $array[$i];
	else
		$comp = 1;
} 
for ($j = 0; $j < $np; $j++) 
{
    $puntaje = $puntaje + $array[$j];
}

if ($comp == 0)
{
	//declaración de las variables para la conexión con la BD
		$db = "rrhh"; //nombre de la BD
		$host = "localhost";  //nombre del ervidos
		$pw = ""; //pasword
		$user = "root"; //usuario
	//conección con la BD
		$con = mysql_connect($host,$user,$pw,$db) or die("No se pudo autentificar con la BD");
		mysql_select_db($db, $con) or die ("No se pudo conectar a la BD");
	//query para insertar los valores en la tabla
		//$sql= "INSERT INTO evaluacion (id,puntaje) VALUES ('$id', '$puntaje')";
		$sql= "UPDATE `evaluacion` SET `puntaje` = '$puntaje' WHERE id = '$id' ";
		mysql_query($sql);
}
else
{
	echo "Error";
}	
?>



