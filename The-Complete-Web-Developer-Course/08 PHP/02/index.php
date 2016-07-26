<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Variable</title>
</head>
<body>
    <?php
    $name = "cannelflow";
    echo("<p>My Name Is $name <br></p>");
    
    $first = "Hello";
    $second =  "How Are You";    
    echo("$first"." "."$second"."<br>");
    
    $num = 23;
    echo("My Age Is $num"."<br>");
    
    $isTrue = true;
    echo("Yes It Is : $isTrue"."<br>"); 
    
    $variableName = "name";
    echo($$variableName."<br>");
    ?>
</body>
</html>