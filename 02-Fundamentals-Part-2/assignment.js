// LECTURE: Functions
// console.log('---LECTURE: Functions---');

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// }

// let indonesia = describeCountry('indonesia', 270, 'jakarta');
// let singapura = describeCountry('singapura', 50, 'singapore');
// let thailand = describeCountry('thailand', 100, 'bangkok');

// console.log(indonesia);
// console.log(singapura);
// console.log(thailand);

// LECTURE: Function Declarations vs. Expressions
// console.log('---LECTURE: Function Declarations vs. Expressions---');
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const percentageOfWorld3 = function (population) {
//     return (population / 7900) * 100;
// }
// console.log(percentageOfWorld1(270));
// console.log(percentageOfWorld3(100));

// LECTURE: Arrow Functions
// console.log('---LECTURE: Arrow Functions---');
// const percentageOfWorld3 = (population) => {
//     return (population / 7900) * 100;
// }
// console.log(percentageOfWorld3(100));

// LECTURE: Functions Calling Other Functions
// console.log('---LECTURE: Functions Calling Other Functions---');
// function describePopulation(country, population) {
//     return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;
// }

// console.log(describePopulation('Indonesia', 270));

// LECTURE: Introduction to Arrays
// console.log('---LECTURE: Introduction to Arrays---');
// const populations = [10, 1441, 332, 83];
// console.log(populations.length === 4);
// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
// console.log('---LECTURE: Basic Array Operations (Methods)---');
// const neighbours = ['malaysia', 'brunei', 'singapura'];
// neighbours.push('utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.indexOf('germany')) {
//     console.log(`Probably not a central euroean country`);
// }

// neighbours[neighbours.indexOf('malaysia')] = 'republic malaysia';
// neighbours[neighbours.indexOf('brunei')] = 'republic brunei';
// neighbours[neighbours.indexOf('singapura')] = 'republic singapura';

// console.log(neighbours);

// LECTURE: Introduction to Objects
// console.log('---LECTURE: Introduction to Objects---');
// const myCountry = {
//     country: 'Indonesia',
//     capital: 'Jakarta',
//     language: 'Bahasa Indonesia',
//     population: 270,
//     neighbours: ['Malaysia', 'Singapura', 'Brunei'],
//     describe: function () {
//         return `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
//     },
//     checkIsland: function () {
//         return `${this.neighbours.length == 0 ? 'true':'false'}`;
//     }
// }
// console.log(myCountry);  

// LECTURE: Dot vs. Bracket Notation
// console.log('---LECTURE: Dot vs. Bracket Notation---');
// console.log(`${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);

// LECTURE: Object Methods
// console.log('---LECTURE: Object Methods---');
// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());

// LECTURE: Iteration: The for Loop
// console.log('---LECTURE: Iteration: The for Loop---');
// for (let i = 0; i < 50; i++) {
//     console.log(`Voter number ${i+1} is currently voting`)
// }

// LECTURE: Looping Arrays, Breaking and Continuing
// console.log('---LECTURE: Looping Arrays, Breaking and Continuing---');
// const populations = [10, 1441, 332, 83];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }

// LECTURE: Looping Backwards and Loops in Loops
// console.log('---LECTURE: Looping Backwards and Loops in Loops---');
// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden',
//         'Russia'
//     ]
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

// LECTURE: The while Loop
// console.log('---LECTURE: The while Loop---');
// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[i]));
//     i++;
// }