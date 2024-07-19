<?php 
$conn=@mysqli_connect("localhost","root","","save_text") or die("error");
if(mysqli_connect_error()>0){
	echo "error";
}
else{
	 echo "successful";
	
	}
mysqli_query($conn,"SET NAMES UTF8");

?>


