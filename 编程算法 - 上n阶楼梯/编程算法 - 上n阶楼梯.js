var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt:''});
rl.prompt();

rl.on('line', function (data) {
    data=parseInt(data.trim());
    let c = f(data)
    process.stdout.write('' + c + '\n');
});
function f(n) {
    if(n===1) {
        return 1;
    }
    else if(n===2) {
        return 2;
    }else {
        return f(n-1)+f(n-2)
    }
}