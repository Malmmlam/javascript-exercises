const findTheOldest = function(people) {

    for(let person of people) {
        if(person["yearOfDeath"] === undefined) {
            person["yearOfDeath"] = new Date().getFullYear();
        }
    }

    let oldest = people.reduce((oldest, person) => 
        person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth ? 
        person : oldest);

    return oldest;
};

    // non-ternary version of final function, for reference. 
    // let oldest = people.reduce((oldest, person) => {
    //     if(person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
    //         oldest = person;
    //     }
    //     return oldest;
    // });


// Do not edit below this line
module.exports = findTheOldest;
