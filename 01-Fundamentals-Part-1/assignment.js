// LECTURE: Values and Variables
// console.log('---LECTURE: Values and Variables---');
// let country = 'Indonesia';
// let continent = 'Asia';
// let population = 270;

// console.log(country);
// console.log(continent);
// console.log(population);

// LECTURE: Data Types
// console.log('---LECTURE: Data Types---');
// let isIsland = false;
// let language;

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

// LECTURE: let, const and var
// console.log('---LECTURE: let, const and var---');
// language = 'bahasa indonesia';
// const country = 'Indonesia';
// const continent = 'Asia';
// country = 'Singapura';
// const isIsland = false;
// isIsland = true;

// LECTURE: Basic Operators
// console.log('---LECTURE: Basic Operators---');
// console.log(population/2);
// console.log(population+1);
// console.log(population>6);
// console.log(33>(population/2));
// let description = country + 'is in' + continent + ', and its' + population + ' million people speak bahasa' + language;

// LECTURE: Strings and Template Literals
// console.log('---LECTURE: Strings and Template Literals---');
// let description = `${country} is in ${continent}, and its ${population/1} million people speak ${language}`;
// console.log(description);

// LECTURE: Taking Decisions: if / else Statements
// console.log('---LECTURE: Taking Decisions: if / else Statements---');
// let rataPopulasi = (population / 2) / 1;
// if (rataPopulasi > 33) {
//     console.log(`${country}'s population is above average`)
// } else {
//     console.log(`${country}'s population is ${rataPopulasi} milion below average`)
// }

// LECTURE: Type Conversion and Coercion
// console.log('---LECTURE: Type Conversion and Coercion---');
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===
// console.log('---LECTURE: Equality Operators: == vs. ===---');
// let numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

// if (numNeighbours == 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// LECTURE: Logical Operators
// console.log('---LECTURE: Logical Operators---');
// let englishLanguage = (language == 'english');
// let less50Million = population < 55;
// let isItIsland = (isIsland == false);

// if (englishLanguage && less50Million && isItIsland) {
//     console.log('You should live in Indonesia :)')
// } else {
//     console.log('Indonesia does not meet your criteria :(');
// }

// LECTURE: The switch Statement
// console.log('---LECTURE: The switch Statement---');
// let bahasa = 'indonesia';

// switch (bahasa) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speaker');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hind':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
//         break;
// }

// LECTURE: The Conditional (Ternary) Operator
// console.log('---LECTURE: The Conditional (Ternary) Operator---');
// let rataPopulasi = (population / 2) / 1;
// console.log(`${country}'s population is ${population>33 ? 'above':'below'} average`);