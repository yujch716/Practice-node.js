var _ = require('underscore');
var arr = [3,6,9,12];

//배열에서 첫번째 값 출력
console.log(arr[0]);
console.log(_.first(arr));

//배열에서 마지막 값 출력
console.log(arr[arr.length-1]);
console.log(_.last(arr));