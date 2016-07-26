<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Send Mail</title>
</head>

<body>
    <?php
       $to = "somebody@localhost.com";
       $subject = "My subject";
       $txt = "Hello world!";
       $headers = "From: webmaster@localhost.com";
       if(mail($to,$subject,$txt,$headers)){
          echo("Successfull");
         }else {
            echo("Error");
            }
    ?>
</body>

</html>