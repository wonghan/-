var genCssSelector=function(){
    //you code here
    let ele = arguments[0];
    let result = arguments[1] ? arguments[1] : '';
    if(ele.nodeType === 9) {
        return result
    }else{
        if(ele.id!=='') {
            result = '#' + ele.id + ' ' + result;
            return genCssSelector(ele.parentNode,result)
        }else if(ele.className !== '') {
            let classList = ele.className.split(' ');
            result = ' '+result
            for(let i=0;i<classList.length;i++) {
                result = '.'+classList[i]+result
            }
            return genCssSelector(ele.parentNode,result)
        }else{
            result = ele.tagName.toLowerCase() + ' ' + result;
            return genCssSelector(ele.parentNode,result)
        }
    }
  }
  
  document.addEventListener('click',function(e){
    //点击li时，返回html body #page .content.main .refer ul li
    console.log(genCssSelector(e.target));
  })
