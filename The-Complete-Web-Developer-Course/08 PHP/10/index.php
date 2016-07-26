<?php
//print_r($_POST);
$error = "";
$message = "";
if($_POST){
    
    //check if fields are empty
    if(!$_POST["email"]){
        $error .= "An Email Address Is Required ! <br>";
    }
    if(!$_POST["sub"]){
        $error .= "Subject Is Required ! <br>";
    }
    if(!$_POST["msg"]){
        $error .= "Message Is Required ! <br>";
    }
    
    //check if email is valid
    if($_POST["email"] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {
           $error .= "Email Is Invalid ! <br>";
    }
    
    //display after form submission
    if($error !==""){
        $error = ('<div class="alert alert-danger"><strong>There Were Error(s) In Your Form :<br> </strong>'. $error .'</div>');
    } else {
          $to = $_POST["email"];
       $subject = $_POST["sub"];
       $txt = $_POST["msg"];
       $headers = "From: webmaster@localhost.com";
       if(mail($to,$subject,$txt,$headers)){
          $message = ('<div class="alert alert-success"><strong>Form Submitted Successfully<br> </strong></div>');
         }else {
                $error = ('<div class="alert alert-danger"><strong>You Got An Error Try Again<br> </strong></div>');
            }
    }
}
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Contact Form</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    </head>

    <body>
        <div class="container">
            <h1>Get In Touch!</h1>
            <p id="error"><?php echo $error.$message ; ?></p>
            <form method="post">
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" name="email">
                    <small class="text-muted">We Will Never Your Email With Any One Else.</small>
                </div>
                <div class="form-group">
                    <label for="sub">Subject</label>
                    <input type="text" class="form-control" id="sub" placeholder="Subject" name="sub">
                </div>
                <div class="form-group">
                    <label for="msg">What Would You Like To Ask</label>
                    <textarea class="form-control" rows="3" id="msg" name="msg"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="submit">Submit</button>
            </form>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js" type="text/javascript"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        <script type="text/javascript" src="script.js">
        </script>
    </body>

    </html>