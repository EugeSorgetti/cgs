<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="De: $name \n\n E-mail: $email \n\n Mensaje: $message";
$recipient = "nicoceluempresa@gmail.com";
$subject = "Correo enviado desde tu website";
$mailheader = "De: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<script>location.href ='https://blazing-personnel.000webhostapp.com';var submit = document.getElementById('submit-btn');var reply = document.getElementById('reply');submit.addEventListener('click',function(){
		alert('Mensaje Enviado');});</script>"
?>
