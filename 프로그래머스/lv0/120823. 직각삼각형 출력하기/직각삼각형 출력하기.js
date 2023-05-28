const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let num = Number(input[0]);
    let answer = '';
    for(let i =1; i<=num; i++){
        answer+='*'.repeat(i)+'\n';
    }
    console.log(answer);
});