let a = 1;
console.log(a);

let b:number;
b=2;
console.log(b);
let c:number = 123
console.log(c);

for (let i = 0; i<3; i++){
    console.log("迴圈"+1);
}

console.log("結束迴圈 i的值是:" +i);

for (let i = 0; i<10; i++) {
    console.log("迴圈次數" + i);
}

for (let i = 1; i<10; i++){
    for (let j = 1; j<10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}