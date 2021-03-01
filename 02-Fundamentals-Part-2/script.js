'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriverLicense) console.log('I can drive :D');

// 01. Function
// console.log('---Function---');

// function logger() {
//     console.log('My name is alif');
// }

// logger();

// function biodata(umur, saudara) {
//     const penjelasan = `Seseorang berumur ${umur} tahun, dan mempunyai ${saudara} saudara`;
//     return penjelasan;
// }

// const alif = biodata(21, 1);
// console.log(alif);

// 02. Function Declarations & Function Expressions
// console.log('---Function Declarations & Function Expressions---');

//Function Declarations 
// function hitungUmur(birthYear) {
//     return 2021 - birthYear;
// }

// const umurKu = hitungUmur(2000);
// console.log(umurKu);

// Function Expressions
// const hitungUmur2 = function (birthYear) {
//     return 2021 - birthYear;
// }

// const umurKu2 = hitungUmur2(2000);
// console.log(umurKu);

// 03. Arrow Function
// console.log('---Arrow Function---');
// const Pensiun = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retire = 65 - age;
//     return `${firstName} akan pensiun di usia ke ${retire}`;
// }

// console.log(Pensiun(2000, 'hafiz'));

// 04. Function Calling other functions
// console.log('---Function Calling other functions---');
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orage`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// console.log('---Coding Challenge 01---');
// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//     let kalimat = '';
//     if (avgDolphins >= avgKoalas * 2) {
//         kalimat = `Dolphins wins (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= avgDolphins * 2) {
//         kalimat = `Koalas wins (${avgKoalas} vs. ${avgDolphins})`;
//     } else {
//         kalimat = `Tidak ada team yang menang`;
//     }

//     return kalimat;
// }

// console.log(checkWinner(avgDolphins, avgKoalas));

// 05. Array
// console.log('---Array---');
// const tahun = new Array(1991, 1993, 1995);
// const friends = ['hafiz', 'ari', 'hanif'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'umar';
// console.log(friends);

// const firstName = 'ahmad';
// const ahmad = [firstName, 'alif', 2021 - 2000, friends];
// console.log(ahmad);
// console.log(ahmad.length);

// 06. Basic Array Operations (Method)
// console.log('---Basic Array Operations (Method)---');
// const teman = ['hafiz', 'arif', 'iman'];

// //add
// teman.push('maman');
// console.log(teman);

// teman.unshift('firman');
// console.log(teman);

// // remove
// const ambilDepan = teman.shift(); //depan
// console.log(teman);
// console.log(ambilDepan);

// const ambilAkhir = teman.pop();
// console.log(teman);
// console.log(ambilAkhir);

// console.log(teman.indexOf('hafiz'));
// console.log(teman.indexOf('Ahmad'));

// console.log('---Coding Challenge 02---');
// const calcTip = function (bill) {
//     return (bill > 50 && bill < 300) ? bill * .15 : bill * .2;
// }

// const bill = [125, 555, 44];

// const tip = [];
// const total = [];

// tip.push(calcTip(bill[0]));
// tip.push(calcTip(bill[1]));
// tip.push(calcTip(bill[2]));

// console.log(tip);

// total.push(bill[0] + tip[0]);
// total.push(bill[1] + tip[1]);
// total.push(bill[2] + tip[2]);

// console.log(total);

// 07. Introduction to Objects
// console.log('---Introduction to Objects---');
// const bio = {
//     firstName: 'alif',
//     lastName: 'riow',
//     age: 2021 - 2000,
//     job: 'programmer',
//     friends: ['michael', 'Peter', 'ahmad']
// }

// console.log(bio);

// 08. Dot vs. Bracket Notation
// console.log('---Dot vs. Bracket Notation---');
// const arema = {
//     firstName: 'Arema',
//     lastName: 'Malang',
//     age: 2021 - 1987,
//     location: 'Malang Raya',
//     pendiri: ['sam acub', 'sam icul']
// }

// console.log(arema.firstName);
// console.log(arema['lastName']);

// const nameKey = 'Name';
// console.log(arema['first' + nameKey]);
// console.log(arema['last' + nameKey]);

// arema.stadion = 'Kanjuruhan';
// arema.website = 'aremamalang.com';

// console.log(arema);

// console.log(`${arema.firstName} has ${arema.pendiri.length} and main leader is ${arema.pendiri[0]}`);

// 09. Object Methods
// console.log('---Object Methods---');
// const arema = {
//     firstName: 'Arema',
//     lastName: 'Malang',
//     birthYear: 1987,
//     location: 'Malang Raya',
//     pendiri: ['sam acub', 'sam icul'],
//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     jenisKlub: function () {
//         return `${this.firstName} ${this.lastName} berumur ${this.calcAge()} tahun. Klub ini termasuk klub periode ${this.calcAge>50? 'perserikatan' : 'galatama'}`;
//     }
// }

// console.log(arema.calcAge());
// console.log(arema.jenisKlub());

// console.log('---Coding Challenge 03---');
// const markBMI = {
//     fullName: "mark miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const johnBMI = {
//     fullName: "john smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// if (markBMI.calcBMI() > johnBMI.calcBMI()) {
//     console.log(`${markBMI.fullName}'s BMI (${markBMI.calcBMI()}) is higher than ${johnBMI.fullName}'s BMI (${johnBMI.calcBMI()})`);
// } else {
//     console.log(`${johnBMI.fullName}'s BMI (${johnBMI.calcBMI()}) is higher than ${markBMI.fullName}'s BMI (${markBMI.calcBMI()})`);
// }

// 10. Iteration: The for loop
// console.log('---Iteration: The for loop---');
// for (let i = 0; i <= 10; i++) {
//     console.log(`Repetisi ke - ${i}`);
// }

// 11. Looping Arrays, Breaking, and Continuing
// console.log('---Looping Arrays, Breaking, and Continuing---');
// const friends = ['hafiz', 'ari', 'hanif'];

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// // breaking and continue

// const angka = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
//     if (angka[i] % 2 != 0) break;
// }

// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
//     if (angka[i] % 2 == 0) continue;
// }

// 12. Looping Backwards and Loops in Loops
// console.log('---Looping Backwards and Loops in Loops---');

//looping backwards
// const angka = [1, 2, 3, 4, 5, 6, 7];
// for (let i = angka.length - 1; i >= 0; i--) {
//     console.log(angka[i]);
// }

//loop in Loops
// for (let i = 0; i < 4; i++) {
//     console.log(`--- Exercise ${i} ---`);

//     for (let j = 0; j < 4; j++) {
//         console.log(`Perulangan ${j}`);
//     }
// }

// 13. The while Loop
// console.log('---The while Loop---');
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Repetisi - ${rep}`);
//     rep++;
// }

// let dadu = Math.trunc(Math.random() * 6) + 1;

// while (dadu !== 6) {
//     console.log(`You rolled a ${dadu}`);
//     dadu = Math.trunc(Math.random() * 6) + 1;
//     if (dadu === 6) console.log('Loop is about to the end');
// }

// console.log('---Coding Challenge 04---');
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum / arr.length;
// }

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));