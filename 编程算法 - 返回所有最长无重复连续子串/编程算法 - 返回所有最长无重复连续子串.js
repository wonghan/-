var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt:''});
rl.prompt();

rl.on('line', function (data) {
    data = data.trim();
    let obj={
        start: 0
    };
    let nowStr='';
    let maxStr='';
    let maxLen=0;
    let len = data.length;
    for(let i=0;i<len;i++){
        let char = data[i];
        if(!(obj[char]>=0)){ // 若不重复
            obj[char]=i;
            nowStr+=char;
        }else{  // 若重复
            if(obj.start<=obj[char]){ // 若start指针在重复字符（重复字符的第一个字符）之前
                obj.start=obj[char]+1; // 改变start指针位置
                obj[char]=i; // 改变这个字符的位置
                if(nowStr.length>maxLen){ // 比较当前子串跟最长子串的长度
                    maxStr=nowStr;  // 若大于，则替换
                    maxLen=nowStr.length;
                    nowStr=data.substring(obj.start,i+1);
                }else if(nowStr.length===maxLen){ // 若等于，则隔一个空格加在末尾
                    maxStr+=' '+nowStr;
                    nowStr=data.substring(obj.start,i+1);
                }else{  // 若小于，仅更新nowStr
                    nowStr=data.substring(obj.start,i+1);
                }
            }else{ // 若start指针在重复字符（重复字符的第一个字符）之后
                obj[char]=i;  // 改变这个字符的位置
                nowStr=data.substring(obj.start,i+1);
            }
        }
    }
    if(nowStr.length>maxLen){
        maxStr=nowStr;
        maxLen=nowStr.length;
    }else if(nowStr.length===maxLen){
        maxStr+=' '+nowStr;
    }
    console.log(maxStr)
});