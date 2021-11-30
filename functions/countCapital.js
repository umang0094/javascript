// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the
// string.

var countUpperCase = (str) => {
    let count = 0;
    for(let i = 0; i< str.length; i++){
        if(str.charCodeAt([i]) >= 65 && str.charCodeAt([i]) <= 90 ){
            count += 1;
        }
    }
    return count;
}
console.log(countUpperCase("My Name Is Umang"))

// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to
// make use of this new function.

var countTotalchar = (str1,str2) =>{
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    var value = str2.charCodeAt(0);
    let total = 0;
    for(let j = 0; j < str1.length; j++){
        if(str1.charCodeAt(j) == value){
            total += 1
        }
    }
    return total;
}
console.log(countTotalchar("My Name is Umang", "n"))