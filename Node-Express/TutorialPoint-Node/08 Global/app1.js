function hello() {
  console.log("Hello World !!!");
}
var t = setTimeout(hello,2000);
clearTimeout(t);
