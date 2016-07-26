/*globals $:false */
$("form").submit(function (e) {
    var error = "";
    if($("#email").val() === ""){
        error += "<p>Email Field Is Required !</p>";
    }
    if($("#sub").val() === ""){
        error += "<p>Subject Field Is Required !</p>";
    }
     if($("#msg").val() === ""){
        error += "<p>Message Field Is Required !</p>";
    }
    if(error !== ""){
        $("#error").html('<div class="alert alert-danger"><strong>There Were Error(s) In Your Form : </strong>'+ error +'</div>');
         return false;
    }else{
        return true;
    }
});