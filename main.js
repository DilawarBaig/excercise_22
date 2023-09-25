"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let cities = ["Lahore", "Karachi", "Peshawar", "Gilgit", "Islamabad"];
// generating index error.
let wrongIndex = 5;
console.log(`array named cities index at ${wrongIndex} is:  ${cities[5]}`);
// printing the array list without error.
console.log("cities names:");
cities.forEach((city) => {
    console.log(city);
});
