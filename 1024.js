var a = 1;
console.log(a);
var b;
b = 2;
console.log(b);
var c = 123;
console.log(c);
for (var i = 0; i < 3; i++) {
    console.log("迴圈" + 1);
}
console.log("結束迴圈 i的值是:" + i);
for (var i = 0; i < 10; i++) {
    console.log("迴圈次數" + i);
}
for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
    }
}
