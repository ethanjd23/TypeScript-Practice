let myName = "Ethan"; //my name
const numberOfStates = 50; //number of states doesn't change
let nine = 5 + 4; //addition
function sayHello () {
    alert("Hello World!");
};
sayHello()
function checkAge (name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")};
}; // Displays alert if person is not over 21
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge('John', 17);
let myFavoriteVegetables = ["Carrots", 'Beets', 'Potatoes', 'Green Peas', 'Sweet Potato'];
for(let i = 0; i < myFavoriteVegetables.length; i++) {
    console.log(myFavoriteVegetables[i]);
}; // loop to display all vegetables in the array
let pet = {
    name: "Rosie",
    breed: "Miniature Pinscher"
};
console.log(pet);
let friends = [
    { name: "Abbie", age: 22 },
    { name: "Emily", age: 19 },
    { name: "Jared", age: 13 },
    { name: "Lindsey", age: 22 },
    { name: "Mordecai", age: 22 },
]
for(let i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age)
}; // checks age of objects in the friends array
function getLength (word) {
    let stringlength = word.length
    if(stringlength % 2 == 0) {
        console.log("The world is nice and even!")
    } else {
        console.log("The world is an odd place!")
    }
}; // gets string's character count and changes msg depending on if it's odd or even
getLength("Hello World");