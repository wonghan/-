var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function(line){
    let n = parseInt(line.trim());
    let result = buy(n)
    console.log(result)
})
function buy(n){
    if(n===0){
        return 0
    }
    if(n<0){
        return -1
    }
    let left = buy(n-6)
    let right = buy(n-8)
    if(left<0&&right<0){
        return -1
    }else if(left<0){
        return right+1
    }else if(right<0){
        return left+1
    }else{  //left>0,right>0
        return left<right?left+1:right+1
    }
}