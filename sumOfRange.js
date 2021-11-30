// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.

var array = (num1, num2) => {
    var arr = [];
    for(let i = num1; i <= num2; i++){
        arr.push(i);
    }
    return arr;
}
console.log(array(1,10))

// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.

var sum = (array) => {
    var sum = 0;
    for(let element in array){
        sum = sum + parseInt(array[element]);
    }
    return sum;
}
console.log(sum(array(1,10)))

// modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
// 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].

function range(num1, num2, step) {
    var array = [];
    if(num1 < num2 && step < 0) {
     [num1, num2] = [num2, num1]
    }
    if (step == null) step = 1;
  
    if (step > 0) {
      for (var i = num1; i <= num2; i += step)
        array.push(i);
    } else {
      for (var i = num1; i >= num2; i += step)
        array.push(i);
    }
    return array;
  }

  console.log(range(5,2,-1))