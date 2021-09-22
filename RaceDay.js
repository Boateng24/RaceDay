// Assigning race number randomly
let raceNumber = Math.floor(Math.random() * 1000);
// creating a variable to check if a racer registered early or not (by default is true)
const registeredEarly = true;
;
// declaring the age of the racer(can be changed)
let age = 19;

// Declaring if else conditional statements for the logic of this project
if (age >=18 && registeredEarly){
  console.log(`An adult, race number is ${raceNumber} and registered early, starting at 9:30am`);
}
else if(age >=18 && !registeredEarly){
  console.log(`Adult but registered late, your rece number is ${raceNumber} and your race starts at 11:00am`);
}
else if (age < 18 && registeredEarly){
  console.log(`Your race number is ${raceNumber},registered early and your race starts at 12:30pm`);
}
else{
  console.log(`Your race number is ${raceNumber},registered late and your race starts at 12:30pm`);
}