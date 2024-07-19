<?php
$soundtext =$_REQUEST['soundtext'];

include("conn.php");

$sql="INSERT INTO `soundtx`(`soundtext`) VALUES ('".$soundtext."')";

mysqli_query($conn,$sql) or die(header("location:index.php?s=-1"));

	
header("location:index.php?s=1");


?>
