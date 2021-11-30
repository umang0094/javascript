// introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

var minimum = (n1,n2) => {
    return n1 < n2 ? n1 : n2;
}
console.log(minimum(2, 8))