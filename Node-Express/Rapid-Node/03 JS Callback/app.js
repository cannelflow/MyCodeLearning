function multiply(a, b) { 
    return (a * b);
}
function square(n) { 
    return multiply (n,n)
}
function printSquare(n) {
    var abc = square(n)
    console.log(abc);
}
printSquare(4)