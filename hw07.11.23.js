//1
// let userAge = prompt("Enter your age:");

// let age = parseInt(userAge);

// if (isNaN(age)) {
//   console.log("Please enter a valid age.");
// } else {
//   if (age >= 18) {
//     console.log("You are old enough to drive.");
//   } else {
//     let years = 18 - age;
//     console.log("You need to wait for " + years + " year(s) to turn 18 and be old enough to drive.");
//   }
// }


//2
// let userAge = prompt("How old are you?");

// userAge = parseInt(userAge);

// if (userAge >= 30) {
//   console.log("You are old enough to drive.");
// } else {
//   let yearsToWait = 30 - userAge;
//   if (yearsToWait === 1) {
//     console.log("You need to wait 1 more year to turn 18.");
//   } else {
//     console.log("You need to wait " + yearsToWait + " more years to turn 30.");
//   }
// }

//3
// let a = 4;
// let b = 3;
// let result = compareNumbersWithTernaryOperator(a, b);

// function compareNumbersWithTernaryOperator(a, b) {
//   return a > b ? 'a больше, чем b' : 'a меньше b';
// }

// console.log(result);


//4
// let userInput = prompt("Enter a number:");
// let number = parseInt(userInput);

// let result = isEvenOrOdd(number);

// function isEvenOrOdd(number) {
//     const parity = ["even", "odd"];
//     return `${number} is an ${parity[number % 2] || "invalid"} number`;
// }

// console.log(result);

//LEVEL 2

//1
// let studentScore = 75; 
// let grade = assignGrade(studentScore); 

// function assignGrade(score) {
//   const gradeRanges = {
//       'A': { min: 80, max: 100 },
//       'B': { min: 70, max: 79 },
//       'C': { min: 60, max: 69 },
//       'D': { min: 50, max: 59 },
//       'F': { min: 0, max: 49 },
//   };

//   for (const grade in gradeRanges) {
//       const range = gradeRanges[grade];
//       if (score >= range.min && score <= range.max) {
//           return grade;
//       }
//   }

//   return 'Invalid score';
// }
// console.log(`Студент получает оценку: ${grade}`);


//2
// let userInput = prompt("Enter the month in English:");
// let season = getSeason(userInput);

// function getSeason(month) {
//   const lowerMonth = month.toLowerCase();
//   switch (lowerMonth) {
//       case 'September':
//       case 'Oktober':
//       case 'November':
//           return 'Autumn';
//       case 'December':
//       case 'January':
//       case 'Feburary':
//           return 'Winter';
//       case 'March':
//       case 'April':
//       case 'May':
//           return 'Spring';
//       case 'June':
//       case 'July':
//       case 'August':
//           return 'Summer';
//       default:
//           return 'Invalid month';
//   }
// }

// if (season === 'Invalid month') {
//   console.log('Invalid month. Please enter the month in English.');
// } else {
//   console.log(`It's the season now: ${season}`);
// }


//3
//let userInput = prompt("What is the day today?");
// let result = isWeekend(userInput);

// function isWeekend(day) {
//   const lowerDay = day.toLowerCase();
//   if (lowerDay === 'saturday' || lowerDay === 'sunday') {
//       return 'weekend';
//   } else {
//       return 'working day';
//   }
// }

// if (result === 'weekend') {
//   console.log(`${userInput} is a weekend.`);
// } else {
//   console.log(`${userInput} is a working day.`);
// }


//LEVEL 3

//1
// let userInput = prompt("Enter a month:");
// let result = getDaysInMonth(userInput);

// function getDaysInMonth(month) {
//     let lowerMonth = month.toLowerCase();
//     switch (lowerMonth) {
//       case 'September':
//       case 'Oktober':
//       case 'November':
//           return 'Autumn';
//       case 'December':
//       case 'January':
//       case 'Feburary':
//           return 'Winter';
//       case 'March':
//       case 'April':
//       case 'May':
//           return 'Spring';
//       case 'June':
//       case 'July':
//       case 'August':
//           return 'Summer';
//       default:
//           return 'Invalid month';
//   }
// }


// if (result === 'Invalid month') {
//     console.log('Invalid month. Please enter a valid month.');
// } else {
//     console.log(result);
// }
