<?php
   
    require __DIR__.'/PHPMailer/src/Exception.php';
    require __DIR__.'/PHPMailer/src/PHPMailer.php';
    require __DIR__.'/PHPMailer/src/SMTP.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__. '/PHPMailer/vendor/autoload.php';



try {
	$mail = new PHPMailer();

    $name = $_POST["r-name"];
    $email = $_POST["r-email"];


    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                       
    $mail->isSMTP();                                         
    $mail->Host       = 'smtp.liwest.at';                    
    $mail->SMTPAuth   = true;                                
    $mail->Username   = 'webmail@asave.at';            
    $mail->Password   = '@BENZ2022andreas';                           
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  
    $mail->Port       = 587;                  

    //Recipients
    $mail->setFrom('webmail@asave.at', 'ASAVE Security Service');
    $mail->addAddress($email, $name); 
     $mail->CharSet = 'UTF-8';
     $mail->Encoding = 'base64';

     $mail->isHTML(true);
     $mail->Subject = 'ASAVE Security Service Auftragsanfrage';
     $mail->Body = '<div style="display: flex; flex-direction: column; ">
		<h1>Vielen Dank für Ihre Auftragsanfrage</h1>
		<p style="font-size: 18px">Ihre Auftragsanfrage wurde erfolgreich weitergeleitert, wir werden uns in Kürze bei Ihnen melden.</p>
		<br/>
		<br/>
		<p style="font-size: 18px">Ihr ASAVE Team</p>

        <div style="display: flex; flex-direction: column">
        <strong>ASAVE Security Service, Ylva Haberlik e.U.</strong>
        <strong>Hauptstraße 83-85, 1.Stock</strong>
        <strong>4040 Linz</strong>
        <br />
        <strong>Tel. +43 / 732 / 91 81 51</strong>
        <br />
        <strong>UID: ATU63149658</strong>
        <br/>
        <br />
        <strong>FN 290562y</strong>
        <strong>LG Linz</strong>
        </div>
       <div>

	 ';
     $mail->AltBody = 'Der Text als simples Textelement';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

try {
	$mail = new PHPMailer();

    $name = $_POST["r-name"];
    $email = $_POST["r-email"];

    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                       
    $mail->isSMTP();                                         
    $mail->Host       = 'smtp.liwest.at';                    
    $mail->SMTPAuth   = true;                                
    $mail->Username   = 'webmail@asave.at';            
    $mail->Password   = '@BENZ2022andreas';                           
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  
    $mail->Port       = 587;                  

    //Recipients
    $mail->setFrom('webmail@asave.at', 'ASAVE Security Service');
    $mail->addAddress('office@asave.at', 'Neue Kontaktaufnahme'); 
     $mail->CharSet = 'UTF-8';
     $mail->Encoding = 'base64';

     $mail->isHTML(true);
     $mail->Subject = 'Test';
     $mail->Body = '<div style="display: flex; flex-direction: column; ">
		<h1>Neue Auftragsanfrage</h1>
		<p style="font-size: 18px">Folgende Daten wurden übermittelt:</p>
		<br/>
		<br/>


        <div style="display: flex; flex-direction: column">

        <strong>Name:</strong>
        <p> ' . $name . '</p>
        <strong>E-Mail:</strong>
        <p> ' . $email . '</p>

        </div>
       <div>

	 ';
     $mail->AltBody = 'Der Text als simples Textelement';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>