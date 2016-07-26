<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>While Loops</title>
</head>
<body>
    <?php
    $a = 0;
    while($a < 10){
        echo("$a <br>");
        $a++;
    }
    echo("<br>");
    
     $a = 5;
    while($a <= 50){
        echo("$a <br>");
        $a+=5;
    }
    echo("<br>");
    
    $i = 0;
    $cars = array("Volvo", "BMW", "Toyota");
    while ($i < sizeof($cars)){
        echo("$cars[$i] <br>");
        $i++;
    }
    echo("<br>");
    
    ?>
</body>
</html>