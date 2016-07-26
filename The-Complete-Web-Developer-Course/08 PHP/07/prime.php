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
//    echo($_GET["num"]);
    
    //check if input filled is empty
    if(is_numeric($_GET["num"]) && $_GET["num"] > 0 && $_GET["num"] == round($_GET["num"], 0)){
        $i = 2;
        $isPrime = true;
        while($i < $_GET["num"]){
            if($_GET["num"] % $i == 0){
                //number is not prime
                $isPrime = false;
            }
         $i++;   
        }
        if($isPrime){
            echo($_GET["num"]." Is A Prime Number");
        } else {
            echo($_GET["num"]." Is Not A Prime Number");
        }
    }else{
        echo("Please Enter Positive Whole Number");
    }
    ?>
    
    <form>
    <input type="text" name="num" placeholder="number">
    <br>
    <input type="submit">   
    </form>
</body>
</html>