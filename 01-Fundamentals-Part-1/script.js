// 01. variable
// variable akan menyimpan data
// console.log('---variable---');
// let nama = 'alif';
// console.log(nama);

// 02. data types
// Number, String, Boolean, undefined, null
// console.log('---data types---');
// let tipeString = 'ini tipe string';
// let tipeNumber = 2021;
// let tipeBoolean = true;
// let tipeUndefined;
// let tipeNull = null;

// console.log(typeof tipeString);
// console.log(typeof tipeNumber);
// console.log(typeof tipeBoolean);
// console.log(typeof tipeUndefined);
// console.log(typeof tipeNull);

// 03. var,let,const
// console.log('---var,let,const---');
// var, let dapat di definisikan kembali, const tidak.
// let age = 20;
// age = 21;

// const asal = 'malang';
// asal = 'jakarta';

// var job = 'programmer';
// job = 'hacker';

// 04. basic operators
// console.log('---basic operators---');

// Math Operator
// const tahun = 2021;
// const umurKu = tahun-2000;
// console.log(umurKu);
// console.log(umurKu*2, umurKu/10, 2**3);

// Assignment Operator
// let x = 10+5;
// x+=10;
// x+=4;
// x++;
// x--;
// console.log(x);

// Comparison Operator
// console.log(tahun>umurKu);
// console.log(tahun-2000 < tahun-2007);

// console.log("---Coding Challenge 01---");
// let markMass = 78;
// let johnMass = 92;
// let markHeight = 1.69;
// let johnHeight = 1.95;

// let markBMI = markMass/(markHeight ** 2);
// let johnBMI = johnMass/(johnHeight ** 2);

// let markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// 05. string and template literals
// console.log('---string and template literals---');
// const firstName = 'Alif';
// const lastName = 'Riow';
// const birthYear = 2000;
// const year = 2021;
// const job = 'Programmer';

// console.log("halo \nteman2");

// const fullBiodata = "Hello, my name is " + firstName + " " + lastName + ", you can call me " + firstName + ". I am a " + (year - birthYear) + ' years old. Now i am a ' + job;
// console.log(fullBiodata);

// console.log(`halo 
// teman2`);

// const fullBiodataNew = `Hello, my name is ${firstName} ${lastName}, you can call me ${firstName}. I am a ${year-birthYear} years old. Now i am a ${job}.`;
// console.log(fullBiodataNew);

// 06. if else statement
// console.log('---if else statement---');
// let umurAlif = 21;

// if (umurAlif > 18) {
//     console.log(`Alif dapat mengendarai sepeda motor 🛵`);
// } else {
//     console.log(`Alif tidak dapat mengendarai sepeda motor ⛔, dan harus menunggu ${umur-18} tahun lagi`);
// }

// let birthYear = 2000;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(`kamu lahir di abad ${century}`);

// console.log("---Coding Challenge 02---");
// let markMass = 78;
// let johnMass = 92;
// let markHeight = 1.69;
// let johnHeight = 1.95;

// let markBMI = markMass / (markHeight ** 2);
// let johnBMI = johnMass / (johnHeight ** 2);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)
// } else {
//     console.log(` John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
// }

// 07. type conversion and coercion
// console.log('---type conversion and coercion---');

// type conversion
// conversi dari satu tipe data ke tipe data lain
// const year = '2021';
// console.log(Number(year), year);
// console.log(Number(year) - 2000);

// console.log(Number('Alif'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coersion
// javascript menyikapi ada number dan string dalam satu variable yang dihubungkan dengan tanda +
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log(3 + 4 - 2 + '2');
// console.log('12' / 2);

// 08. truthy and falsy
// console.log('---truthy and falsy---');
// ada 5 tipe falsy : 0, '', undefined, null, NaN. 
// Jika variabel bernilai salah satu tipe falsy, maka boolean bernilain false
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean('Alif'));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//     console.log(`Anda mempunyai uang banyak`);
// } else {
//     console.log(`Anda tidak mempunyai uang`);
// }

// const height = 1000;
// if (height) {
//     console.log(`Height is defined`);
// } else {
//     console.log(`Height isn't defined`);
// }

// 08. Equality Operators: == vs. ===
// console.log('---Equality Operators: == vs. ===---');
// let ask = prompt('apa angka favoritmu?');

// if (Number(ask) === 10) {
//     console.log('Angka kesukaan mu 10');
// } else {
//     console.log('Angka kesukaan mu tidak 10');
// }

// 09. logical operators
// console.log('---logical operators---');
// const hasDrivenLicense = true;
// const hasGoodVision = false;

// console.log(hasDrivenLicense && hasGoodVision);
// console.log(hasDrivenLicense || hasGoodVision);
// console.log(!hasDrivenLicense);

// const isTired = false;

// if (hasDrivenLicense && hasGoodVision && !isTired) {
//     console.log('You can able to drive');
// } else {
//     console.log('You should take rest');
// }

// console.log("---Coding Challenge 03---");
// let dolphins = (96 + 108 + 89) / 3;
// let koalas = (88 + 91 + 110) / 3;

// if (dolphins == koalas && dolphins > 100 && koalas > 100) {
//     console.log('Both wins');
// } else if (dolphins > koalas && dolphins > 100) {
//     console.log('dolphins wins thropies');
// } else if (koalas > dolphins && koalas > 100) {
//     console.log('koalas wins thropies');
// } else {
//     console.log('No team wins');
// }

// 09. switch statement
// console.log('---switch statement---');

// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log('be productive');
//         break;
//     case 'tuesday':
//         console.log('prepare for course');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('learning code');
//         break;
//     case 'friday':
//         console.log('record video');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy life');
//         break;
//     default:
//         console.log('not a valid day');
//         break;
// }

// 10. statement and expressions
// console.log('---statement and expressions---');
// expression = yang menghasilkan angka / value / hasil dari perhitungan, seperti: 
// true && false && !false
// 4 + 5
// 1987

// statement = seperti kalimat atau diakhiri dengan tanda ;
// if (2 + 4 == 6) {
//     const str = 'benar'; //statement
// }

// 11. the conditional(ternary) operations
// console.log('---the conditional(ternary) operations---');
// const age = 20;
// age >= 20 ? console.log('anda boleh berkendara') : console.log('anda belum boleh berkendara');

// console.log("---Coding Challenge 04---");
// let bill = 275;
// let tip = (bill < 50) && (bill > 100) ? bill * .15 : bill * .2;
// let value = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total values was ${value}`);