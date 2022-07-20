// The Fortune Teller

const tellFortune = (numOfChildren, partnerName, geographicLocation, job) =>
  `You will be a ${job} in ${geographicLocation}, and married to ${partnerName} with ${numOfChildren} kids.`;

console.log(tellFortune("1", "Thush", "Colombo", "Fullstack Developer"));
console.log(
  tellFortune("2", "Thush love", "Dortmund", "Senior Fullstack Developer")
);
console.log(tellFortune("4", "Thush Life", "Zurich", "owner"));

// The Puppy Age Calculator

function calculateDogAge(puppyAge, convertionRate = 7) {
  let ageOfDog = puppyAge * convertionRate;
  console.log(`Your doggie is ${ageOfDog} years old in dog years!`);
}

calculateDogAge(2);
calculateDogAge(8);
calculateDogAge(12);

// The Lifetime Supply Calculator

function calculateSupply(age, amountPerDay = 3) {
  const fullLife = 100;
  let amountOfSupply = (fullLife - age) * amountPerDay * 365.25;
  if (age <= fullLife) {
    console.log(
      `You will need ${Math.round(
        amountOfSupply
      )} to last you until the ripe old age of ${fullLife}`
    );
  } else {
    console.log("Sorry, you're out of supply");
  }
}
calculateSupply(20, 7);
calculateSupply(70, 3);
calculateSupply(90, 8);

// The Geometrizer
const calcCircumfrence = (radius) => {
  console.log(`The circumference is ${(2 * Math.PI * radius).toFixed(4)}`);
};

calcCircumfrence(2);

const calcArea = (radius) => {
  console.log(`The area is ${(Math.PI * radius ** 2).toFixed(3)}`);
};

calcArea(3);

// The Temperature Converter

const celsiusToFahrenheit = (calcFahrenheit) => {
  console.log(`${calcFahrenheit}°C is ${(calcFahrenheit / 5) * 9 + 32}°F`);
};
celsiusToFahrenheit(50);

const fahrenheitToCelsius = (calcCelcius) => {
  console.log(`${calcCelcius}°F is ${((calcCelcius - 32) * 5) / 9}°C`);
};
fahrenheitToCelsius(50);
