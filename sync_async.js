var fs = require('fs');

//Sync
console.log(1);
var hello = fs.readFileSync('hello.txt', {encoding:'utf8'});
console.log(hello);

//Async
console.log(2);
fs.readFile('hello.txt',{encoding:'utf8'}, function (err, data){
    console.log(3);
    console.log(hello);
})
console.log(4);