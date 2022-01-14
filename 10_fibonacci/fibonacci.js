const fibonacci = function(fibNum) {
    // if(typeof(fibNum) === "string") {
    //     parseInt(fibNum);
    // }
    parseInt(fibNum);

    if(fibNum < 1) {return "OOPS"}

    let fibArray = [0, 0, 1];

    for(let i = 1; i < fibNum; i++){
        fibArray [0] = fibArray [1] + fibArray [2];
        fibArray.sort(function(a, b){return a-b});
    }

    return fibArray [2];
};

// Do not edit below this line
module.exports = fibonacci;
