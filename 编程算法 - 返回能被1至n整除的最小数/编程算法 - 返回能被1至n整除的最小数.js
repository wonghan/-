var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function(line){
    let n = parseInt(line.trim());
    let prime=primeNum(n);
    let arr=[];
    let result=1;
    for(let i=0,len=prime.length;i<len;i++) {
        for(let j=1;;j++){
            if(Math.pow(prime[i],j)>n){
                arr.push(Math.pow(prime[i],j-1));
                break;
            }
        }
    }
    for(let k=0;k<arr.length;k++) {
        result=result*arr[k];
        if(result>987654321) {
            result=result%987654321;
        }
    }
    result=result%987654321;
    console.log(result)
})
function primeNum(n) {
    let primeList = [];
    if(n>=2) {
        primeList.push(2);
    }
    for (let i = 3; i <= n; i+=2) {
        if (isPrimeNum(i,primeList)){
            primeList.push(i);
        }
    }
    return primeList;
}
function isPrimeNum(num,primeList) {
    for(let i = 3,j = 1; i <= Math.sqrt(num); i = primeList[j++]){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}