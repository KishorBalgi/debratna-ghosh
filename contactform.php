
<?php
//get data from form  
$name = $_POST['name'];
$mailFrom= $_POST['E-mail'];
$subject=$_POST['subject'];
$message= $_POST['message'];
$mailTo = "kishorwebdev@gmail.com";

$txt ="You have recieved a mail from ".$name.".\n\n".$message;
$headers = "From: ".$mailFrom;
if($email!=NULL){
    mail($mailTo,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>