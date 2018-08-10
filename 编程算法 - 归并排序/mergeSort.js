function mergeSort(array){
    return mergeSortRec(array)
}
function mergeSortRec(array){
    let length = array.length
    if(length === 1){
        return array // 递归最后的返回
    }
    let mid = Math.floor(length / 2)
    let left = array.slice(0,mid)
    let right = array.slice(mid,length)

    return merge(mergeSortRec(left), mergeSortRec(right))
}
function merge(left,right){
    let result = []
    let il = 0
    let ir = 0
    while(il<left.length && ir<right.length) {
        if(left[il] < right[ir]){
            result.push(left[il++])
        }else{
            result.push(right[ir++])
        }
    }
    while(il<left.length){
        result.push(left[il++])
    }
    while(ir<right.length){
        result.push(right[ir++])
    }
    return result
}