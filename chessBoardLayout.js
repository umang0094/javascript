// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.

let output = "";
for(let i = 1; i< 9;i++){
    for(let j =1 ;j< 9; j++){
        (i+j)%2 ==0? output +=" ":output +="#";
    }
    output += "\n";
}
console.log(output)