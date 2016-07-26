<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Post Method</title>
</head>
<body>
    <?php
    //get the value from post method
//    print_r($_POST)
//    echo($_POST["name"]);  
    if($_POST){
        $userName = array("cannelflow","lowshoulder","skyway","highway");
        $isKnown = false;
        foreach($userName as $key => $value){
            if($_POST["name"] == $value){
                $isKnown = true;
            }
        }
        if($isKnown){
            echo("Hello ".$_POST["name"]." Welcome Here ");
        } else {
            echo("Hello ".$_POST["name"]." Please Login");
        }
    }
    ?>
    <form action="" method="post">
        <input type="text" name="name" placeholder="name">
        <input type="submit">
    </form>
</body>
</html>