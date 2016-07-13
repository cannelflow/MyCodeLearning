function average (arr) {
    var sum = 0;
    for (var i = 0;i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(Math.round(sum/arr.length));
} 
average([10,20]);
average([25,25]);
