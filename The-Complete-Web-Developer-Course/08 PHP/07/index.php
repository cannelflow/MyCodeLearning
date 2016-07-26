<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Get Method</title>
</head>
<body>
    <?php
    
    //get the value from url by priniting $_GET array
//    print_r($_GET);
//    echo("<br>");
//    
    //echo the value after
    echo($_GET["name"]);
    echo("<br>");
    echo($_GET["city"]);
    ?>
    
    <form>
    <input type="text" name="name" placeholder="name">
    <br>
    <input type="text" name="city" placeholder="city"> 
    <br>
    <input type="submit">   
    </form>
</body>
</html>