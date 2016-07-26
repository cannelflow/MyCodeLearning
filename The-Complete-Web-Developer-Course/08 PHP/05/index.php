<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Loop</title>
</head>
<body>
    <?php
    //for loop
    for($a = 0; $a < 10; $a++){
        echo ("Number : $a <br> ");
    }
    echo("<br>");
    
    //print even number
    for ($a = 2; $a <= 30; $a++) {
        if($a % 2 == 0){
            echo ("Number Is : $a <br>");
        }
    }
    echo("<br>");
    
    //count 10 to 0
    for($a = 10; $a > 0; $a--){
        echo ("Number : $a <br> ");
    }
    echo("<br>");
    
    //loop through array
    $myCity = array("Delhi","Raipur","Jaipur","Kolkata");
    for($i = 0; $i < sizeof($myCity); $i++){
        echo ($myCity[$i]."<br>");
    }
    echo("<br>");
    
     //loop through array
    $myTown = array("Delhi","Raipur","Jaipur","Kolkata","NCR");
    forEach($myTown as $key => $value){
        echo ("Array Item $key "." Is $value <br>");
    }
    echo("<br>");
    ?>
</body>
</html>