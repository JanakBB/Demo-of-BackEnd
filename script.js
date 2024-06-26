let age =32;

let user = {
    name: "Janak Bohara",
    address: "kanchanpur"
};

function findBirthYear(age) {
    return new Date().getFullYear() - age;
}

console.log(findBirthYear(age));

//ab yasma maile user ko kunai use garer kehi garn skxu sir?
// user.findBirthYear(age) 