<?php
$error = "";
$weather = "";
if(array_key_exists('city', $_GET)){
    
    //remove spaces from url
    $city = str_replace(' ', '',$_GET["city"]);
    
    //check if url exists or not
    $file_headers = @get_headers('http://www.weather-forecast.com/locations/'.$city.'/forecasts/latest');
    if($file_headers[0] == 'HTTP/1.1 404 Not Found') {
         $error = "City Could Not Found !!";
     } else {
        
         //get content of requested url
          $forecastPage = file_get_contents('http://www.weather-forecast.com/locations/'.$city.'/forecasts/latest');
        
        //get data which we required
          $pageArray = explode('3 Day Weather Forecast Summary:</b><span class="read-more-small"><span class="read-more-content"> <span class="phrase">',$forecastPage);
        
         //check if we are getting the required data
        if(sizeof($pageArray) > 1){
            
           $secondPage = explode('</span></span></span>',$pageArray[1]);
          //check if we are getting the required data
            if (sizeof($secondPage) >1) {
                //pass it to html
              $weather = $secondPage[0];
            }  else {
                $error = "City Could Not Found !!";
            }       
        } else {
            $error = "City Could Not Found !!";
        }
    }
}
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Weather App</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>
        <div class="container text-center">
             <h1>What's The Weather</h1>
            <form method="get">
                <fieldset class="form-group">
                    <label for="city">Enter The Name Of The City</label>
                    <input type="text" class="form-control" id="city" placeholder="Eg. London,Tokyo" name="city" value="<?php  
                                    if(array_key_exists('city', $_GET)){ echo $city;                        }
                                        ?>">
                </fieldset>
                 <button type="submit" class="btn btn-primary">Submit</button>        
            </form>
            <div class="result">
            <?php
            if($weather){
               echo ('<div class="alert alert-success" role="alert">'. $weather .'</div>');
            } else if ($error){
                 echo ('<div class="alert alert-danger" role="alert">'. $error .'</div>');   
             }
            ?>
        </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js" type="text/javascript"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    </body>

    </html>