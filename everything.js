
function every(array, test) {
    for(let i = 0; i < array.length; i++){

        if(!(test(array[i]))){
            console.log(array[i])
            return false;
        }
        
    }
  return true;
  }
  
  console.log(every([1, 13, 5], n => n < 10));