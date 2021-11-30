function reduce(arr){
    var newArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j =0; j < arr[i].length; j++){
        newArr.push(arr[i][j])
        }
    }
    return newArr;
}
console.log(reduce([[1,2,3],[4,5]]))