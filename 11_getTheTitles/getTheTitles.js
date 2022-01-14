const getTheTitles = function(books) {
    let returnArray = [];
    
    for(let i = 0; i < books.length; i++) {
        returnArray.push(books[i].title)
    }

    return returnArray;
};

// Do not edit below this line
module.exports = getTheTitles;
