// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// Method One
for(let j = "#"; j.length < 8; j+="#"){
    console.log(j)
}

// Method Two
for(let i = 1; i < 8; i+=1){
    switch (i) {
            case 1:1
                console.log("#")
                break;
            case 2:2
                console.log("##")
                break;
            case 3:3
                console.log("###")
                break;
            case 4:4
                console.log("####")
                break;
            case 5:5
                console.log("#####")
                break;
            case 6:6
                console.log("######")
                break;
            case 7:7
                console.log("#######")
                break;
    
        default:
            break;
    }
}
