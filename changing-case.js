var yourname = prompt("enter your name");
var firstchar = yourname.slice(0,1);
var restofname = yourname.slice(1,yourname.length);
var nametouppercase = firstchar.toUpperCase()+ restofname.toLowerCase();
alert("Hello " + nametouppercase +" , how are you?");