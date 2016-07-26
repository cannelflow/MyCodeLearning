<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Array</title>
</head>
<body>
    <?php
    
    //simple array
    $myArray = array("A","B","C","D","E");
    print_r($myArray);
    echo("<br>");
    echo($myArray[1]);
    $myArray[1] = "E";
    echo("<br>");
    print_r($myArray);
    
    //associative array
    $anotherArray = array(
         "name"=>"cannelflow",
         "age"=>20,
         "city"=>"delhi",
    );
    print_r($myArray);
    echo("<br>");
    echo($anotherArray["name"]);
    echo("<br>");
    
    //length of an array
    echo (sizeof($myArray));
    echo("<br>");
    echo (sizeof($anotherArray));
    echo("<br>");
    
    //add an item to array
    $myArray[] = "E"; //End
    $anotherArray["sex"] = "M";//End
    print_r($myArray);
    echo("<br>");
    print_r($anotherArray);
    echo("<br>");
    
    //remove an item
    unset($anotherArray["name"]);
     print_r($anotherArray);
    echo("<br>");
    unset($myArray[2]);
     print_r($myArray);
    echo("<br>");
    ?>
</body>
</html>