function quickSort(array){
    return quick(array, 0, array.length-1)
}
function quick(array, left, right){

    if(array.length>1){

        let index = partition(array,left,right)
        
        if(left<index-1){
            quick(array, left, index-1)
        }
        
        if(index<right){
            quick(array, index, right)
        }
    }
}
// 划分操作
function partition(array, left, right){
    let pivot = array[Math.floor((right+left)/2)]
    let i = left
    let j = right

    while(i<=j){
        while(array[i] < pivot) {
            i++
        }
        while(array[j] > pivot) {
            j--
        }
        if(i <= j){
            [array[i],array[j]]=[array[j],array[i]];
            i++;
            j--;
        }
    }
    console.log(array)
    return i
}

quickSort([3,5,1,6,4,7,2])