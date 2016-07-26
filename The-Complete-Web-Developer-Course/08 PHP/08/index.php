<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Post Method</title>
</head>
<body>
    <?php
    //get the value from post method
    print_r($_POST)
    ?>
    <form action="" method="post">
        <input type="text" name="name" placeholder="name">
        <input type="submit">
    </form>
</body>
</html>