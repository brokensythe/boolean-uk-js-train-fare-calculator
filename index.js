
let london = 0;
let paris = 100;
let bacelona = 250;
let berlin = 200;

const userName = prompt("What is your name")
const userAge = Number(prompt("How old are you?"))

alert("Welcome to Ade Station - You can travel to Bacelona, London, Paris and Berlin")

const userStartingStation = prompt("Where are you traveling from?").toLowerCase()
const userDestination = prompt("Where are you traveling to?").toLocaleLowerCase()

// const userTravelDistance = Number(prompt("How far are you traveling in Km? Price per travelled Km is £0.21"

let userTravelDistance = 0;
if (userStartingStation === 'london' && userDestination === "berlin" ||  userStartingStation === "berlin" && userDestination === 'london') {
   userTravelDistance = 200;
} else if (userStartingStation === 'paris' && userDestination === "london" ||  userStartingStation === "london" && userDestination === 'paris') {
  userTravelDistance = 100;
}



const pricePerKm = 0.21
let travelFare = userTravelDistance * pricePerKm

// junior discount 20%
// senior discount 40%
const TotalAfterJuniorDiscount = 0.8
const TotalAfterSeniorDiscount = 0.6



if (userAge < 18 ) { 
 travelFare = travelFare * TotalAfterJuniorDiscount
 alert(`You are traveling from ${userStartingStation} to ${userDestination} which is ${userTravelDistance}Km. Your fare price with a 20% junior discount is £${travelFare}`)
} else if (userAge > 65){
 travelFare = travelFare * TotalAfterSeniorDiscount
  alert(`You are traveling from ${userStartingStation} to ${userDestination} which is ${userTravelDistance}Km. Your fare price with a 40% senior discount is £${travelFare}`)
} else {
 alert(`You are traveling from ${userStartingStation} to ${userDestination} which is ${userTravelDistance}Km therefore you are paying £${travelFare} for your fare.`)
}


