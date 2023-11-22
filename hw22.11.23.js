//1
// function fullName() {

//   }
// fullName()


//2
// function FullName (){
//     let firstName = 'Azamat'
//     let lastName = 'Kainarbek'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     console.log(fullName)
// }
// FullName()




//1
// function fullName() {
//     console.log("zharylkasyn");
//   }
  
//   fullName();
  

//2
// function fullName() {
//     let firstName = "John";
//     let lastName = "Doe";
//     let fullName = firstName + " " + lastName;
//     return fullName;
//   }
  
//   console.log(fullName());


//   //3

// function addNumbers(num1, num2) {
//     return num1 + num2;
//   }
  

//   let result = addNumbers(5, 7);
//   console.log(result);
  
//   4


// function Rectangle(length, width) {
//     const area = length * width;
    
//     return area;
//   }
  

//   let rectangleLength = 10;
//   let rectangleWidth = 5;
//   const area = Rectangle(rectangleLength, rectangleWidth);
//   console.log(area);


//5
// function perimeterOfRectangle(length, width) {
//     let perimeter = 2 * (length + width);
//     return perimeter;
//   }
//   const rectangleLength = 10;
//   const rectangleWidth = 5;
//   const perimeter = perimeterOfRectangle(rectangleLength, rectangleWidth);
//   console.log(perimeter);


//6
// function volumeOfRectPrism(length, width, height) {
//     let volume = length * width * height;
//     return volume;
//   }
//   const prismLength = 10;
//   const prismWidth = 5;
//   const prismHeight = 3;
//   const volume = volumeOfRectPrism(prismLength, prismWidth, prismHeight);
//   console.log(volume);


//7
// function areaOfCircle(radius) {
//     const pi = Math.PI;
//     return pi * radius * radius;
//   }

//   const circleRadius = 5;
//   const circleArea = areaOfCircle(circleRadius);
//   console.log(circleArea);

//8
// function circumOfCircle(radius) {
//     const circumference = 2 * Math.PI * radius;
//     return circumference;
// }

// const draius = 4;
// const result = circumOfCircle(radius);

// console.log("Circumference of the circle: " + result);


//9
// function calculateDensity(mass, volume) {
//     let = mass , volume;
//     return let;
//   }
  
//   const mass = 100;
//   const volume = 50;
//   const density = calculateDensity(mass, volume);
//   console.log(density);

//10

// function calculateSpeed(distance, time) {
//     return time !== 0 ? distance / time : 0;
// }

// const distance = 320;
// const time = 80; 
// const speed = calculateSpeed(distance, time);

// console.log(speed);

//11
// function calculateWeight(mass, gravity) {
//     const weight = mass * gravity;
//     return weight;
//   }
//   const weight = calculateWeight(11, 9.8);
// console.log(weight);

//12
// function convert(celsius) {
//     return (celsius * 10/5) + 32;
// }
// const celsius = 10;
// const result = convert(celsius);
// console.log(result);

//13
// function calculateBMI(weight, height) {
//     let bmi = weight / (height * height);
//     if (bmi < 18.5) {
//       console.log("Underweight");
//     } else
   
//   if (bmi < 25) {
//       console.log("Normal weight");
//     } else
   
//   if (bmi < 30) {
//       console.log("Overweight");
//     } else {
//       console.log("Obese");
//     }
//     return bmi;
//   }
  
//   let weight = 80;
//   let height = 1.8;
  
//   const bmi = calculateBMI(weight, height);
//   console.log(bmi);

//14
// function checkSeason(month) {
//     if (month >= 3 && month <= 5) {
//         return
 
// "Spring";
//     } else
 
// if (month >= 6 && month <= 8) {
//         return
 
// "Summer";
//     } else
 
// if (month >= 9 && month <= 11) {
//         return
 
// "Autumn";
//     } else {
//         return
 
// "Winter";
//     }
// }

// console.log(checkSeason(1)); 
// console.log(checkSeason(4)); 
// console.log(checkSeason(7)); 
// console.log(checkSeason(10)); 


// 15
// function findMax(a, b, c) {
//     return Math.max(a, Math.max(b, c));
//   }
  
//   console.log(findMax(0, 10, 5));
//   console.log(findMax(0, -20, 5));




//LEVEL 2
//Azamat, [21.11.2023 18:35]
// const aCoefficient = 2;
// const bCoefficient = 3;
// const constantTerm = -5;
// const xValue = 4;
// const yValue = 1;

// const equationResult = solveLinEquation(aCoefficient, bCoefficient, constantTerm, xValue, yValue);
// console.log(The result of the linear equation is ${equationResult}.);

  ////2
  
//   function solveQuadratic(a, b, c) {

//     const discriminant = b**2 - 4*a*c;

    
//     if (discriminant > 0) {
//         const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return [root1, root2];
//     } else if (discriminant === 0) {
//         const root = -b / (2 * a);
//         return [root];
//     } else {
        
//         const realPart = -b / (2 * a);
//         const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
//         const root1 = ${realPart} + ${imaginaryPart}i;
//         const root2 = ${realPart} - ${imaginaryPart}i;
//         return [root1, root2];
//     }
// }


// console.log(solveQuadratic()); 
// console.log(solveQuadratic(1, 4, 4));
// console.log(solveQuadratic(1, -1, -2)); 
// console.log(solveQuadratic(1, 7, 12)); 
// console.log(solveQuadratic(1, 0, -4));
// console.log(solveQuadratic(1, -1, 0)); 

////3

// function printArray(array) {
//   for (let i = 0; i < array.length; i++) {
//       console.log(array[i]);
//   }
// }

// const myArray = [1, 2, 3, 4, 5];
// printArray(myArray);

// //4
// function showDateTime() {
//   const currentDate = new Date();
//   const day = String(currentDate.getDate()).padStart(2, '0');
//   const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
//   const year = currentDate.getFullYear();
//   const hours = String(currentDate.getHours()).padStart(2, '0');
//   const minutes = String(currentDate.getMinutes()).padStart(2, '0');


//   const formattedDateTime = ${month}/${day}/${year} ${hours}:${minutes};

//   console.log(formattedDateTime);
// }


// showDateTime();
// // 5
// function swapValues(x, y) {
//   console.log(Before swapping: x => ${x}, y => ${y});

//   let temp = x;
//   x = y;
//   y = temp;

//   console.log(After swapping: x => ${x}, y => ${y});
// }


// swapValues(3, 4);
// swapValues(4, 5);
// // 6
// function reverseArray(arr) {
  
//   let reversedArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArray.push(arr[i]);
//   }

//   return reversedArray;
// }


// console.log(reverseArray([1, 2, 3, 4, 5])); 
// console.log(reverseArray(['A', 'B', 'C'])); 

// // 7
// function capitalizeArray(arr) {

//   let capitalizedArray = [];

//   for (let i = 0; i < arr.length; i++) {

//       capitalizedArray.push(arr[i][0].toUpperCase() + arr[i].slice(1));
//   }

//   return capitalizedArray;
// }


// console.log(capitalizeArray(['apple', 'banana', 'juice'])); 
// console.log(capitalizeArray(['hoie', 'doe', 'haha'])); 
// // 8
// function addItem(item, originalArray) {
//   let newArray = [...originalArray];
//   newArray.push(item);

//   return newArray;
// }

// const originalArray = ['apple', 'banana', 'orange'];
// const newArray1 = addItem('grape', originalArray);
// const newArray2 = addItem('kiwi', newArray1);

// console.log(originalArray); 
// console.log(newArray1); 
// console.log(newArray2);
// // 9
// function removeItem(index, originalArray) {
//   let newArray = [...originalArray];
//   if (index >= 0 && index < newArray.length) {
//       newArray.splice(index, 1);
//   } else {
//       console.error('Invalid index. No item removed.');
//   }

//   return newArray;
// }

// const originalArray = ['apple', 'banana', 'orange'];
// console.log(originalArray); 
// // 10
// function sumOfNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//       sum += i;
//   }

//
// function sumOfNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//       sum += i;
//   }

//   return sum;
// }

//Azmat, [21.11.2023 18:35]
// console.log(sumOfNumbers(5));
// // 11
// function sumOfOdds(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//       if (i % 2 !== 0) {
//           sum += i;
//       }
//   }

//   return sum;
// }

// console.log(sumOfOdds(10));
// // 12
// function sumOfEven(n) {

//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//       if (i % 2 === 0) {
//           sum += i;
//       }
//   }

//   return sum;
// }

// console.log(sumOfEven(15)); 
// // 13
// function evensAndOdds(number) {
//   if (Number.isInteger(number) && number > 0) {
//       const numberString = number.toString();
//       let evenCount = 0;
//       let oddCount = 0;
//       for (let i = 0; i < numberString.length; i++) {
//           const digit = parseInt(numberString[i]);
//           if (digit % 2 === 0) {
//               evenCount++;
//           } else {
//               oddCount++;
//           }
//       }

//       console.log(The number of odds are ${oddCount}.);
//       console.log(The number of evens are ${evenCount}.);
//   } else {
//       console.error('Please provide a positive integer as input.');
//   }
// }
// evensAndOdds(100);
// // 14 
// function sum(...args) {
//     return args.reduce((total, current) => total + current, 0);
//   }
//   console.log(sum(1, 2, 3));  
// // 15
// function generateRandomUserIp() {
//   const segment1 = Math.floor(Math.random() * 256);
//   const segment2 = Math.floor(Math.random() * 256);

//   const ipAddress = ${segment1}.${segment2};

//   return ipAddress;
// }

// const randomUserIp = generateRandomUserIp();
// console.log(randomUserIp);
// // // 16
// function generateRandomMacAddress() {
//   function getRandomHexDigit() {
//       const hexDigits = '0123456789ABCDEF';
//       return hexDigits[Math.floor(Math.random() * 16)];
//   }
//   const macSegments = [];
//   for (let i = 0; i < 6; i++) {
//       const segment = ${getRandomHexDigit()}${getRandomHexDigit()};
//       macSegments.push(segment);
//   }
//   const macAddress = macSegments.join(':');
//   return macAddress;
// }

// const randomMacAddress = generateRandomMacAddress();
// console.log(randomMacAddress);

//16
// function generateRandomMacAddress() {
//   function getRandomHexDigit() {
//       const hexDigits = '0123456789ABCDEF';
//       return hexDigits[Math.floor(Math.random() * 16)];
//   }
//   const macSegments = [];
//   for (let i = 0; i < 6; i++) {
//       const segment = ${getRandomHexDigit()}${getRandomHexDigit()};
//       macSegments.push(segment);
//   }
//   const macAddress = macSegments.join(':');
//   return macAddress;
// }

// const randomMacAddress = generateRandomMacAddress();
// console.log(randomMacAddress);

//17
// function randomHexaNumberGenerator() {
//     const hexDigits = ''#ee33df'';
//     let randomHexNumber = '';
//     for (let i = 0; i < 6; i++) {
//       randomHexNumber += hexDigits[Math.floor(Math.random() * hexDigits.length)];
//     }
//     return randomHexNumber;
//   }
//   const randomHexNumber = randomHexaNumberGenerator();
//   console.log(randomHexNumber);
    

// 18
// function user() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let userId = '';
//     for (let i = 0; i < 7; i++) {
//       userId += characters[Math.floor(Math.random() * characters.length)];
//     }
//     return userId;
//   }
  
//   console.log(user());


// level 3
// function userIdGeneratedByUser() {
//     const numCharacters = parseInt(prompt('Enter the number of characters per ID:'));
//     const numIds = parseInt(prompt('Enter the number of IDs to generate:'));
  
//     for (let i = 0; i < numIds; i++) {
//       console.log(userIdGenerator(numCharacters));
//     }
//   }
  
//   userIdGeneratedByUser();

// 2
// function rgbColorGenerator() {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const rgbColor = rgb(${red}, ${green}, ${blue});
//     return rgbColor;
//   }
  
//   console.log(rgbColorGenerator());

// 3
// function arrayOfHexaColors(n) {
//     const hexaColors = [];
//     for (let i = 0; i < n; i++) {
//       let hexaColor = '#';
//       for (let j = 0; j < 6; j++) {
//         hexaColor += Math.floor(Math.random() * 16).toString(16);
//       }
//       hexaColors.push(hexaColor);
//     }
//     return hexaColors;
//   }
  
//   const numberOfColors = 5; 
//   const generatedColors = arrayOfHexaColors(numberOfColors);
//   console.log(generatedColors);

// 4
// function arrayOfRgbColors(n) {
//     const rgbColors = [];
//     for (let i = 0; i < n; i++) {
//       const red = Math.floor(Math.random() * 256);
//       const green = Math.floor(Math.random() * 256);
//       const blue = Math.floor(Math.random() * 256);
//       const rgbColor = rgb(${red}, ${green}, ${blue});
//       rgbColors.push(rgbColor);
//     }
//     return rgbColors;
// }

//     const numberOfColors = 5; // Change this value to generate the desired number of colors
//     const generatedColors = arrayOfRgbColors(numberOfColors);
//     console.log(generatedColors);

// 5
// function convertHexaToRgb(hexaColor) {
//     hexaColor = hexaColor.replace('#', '');
  
//     const red = parseInt(hexaColor.substring(0, 2), 16);
//     const green = parseInt(hexaColor.substring(2, 4), 16);
//     const blue = parseInt(hexaColor.substring(4), 16);
  
//     const rgbColor = rgb(${red}, ${green}, ${blue});
  
//     return rgbColor;
//   }
  
//   const hexaColor = "#ff0000";
//   const rgbColor = convertHexaToRgb(hexaColor);
//   console.log(rgbColor);

// 6
// function rgbToHexa(red, green, blue) {
//     return #${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')};
//   }
  
//   console.log(rgbToHexa(255, 0, 0)); // #FF0000
//   console.log(rgbToHexa(0, 255, 0)); // #00FF00
//   console.log(rgbToHexa(0, 0, 0)); // #000000
//   console.log(rgbToHexa(255, 255, 255)); // #FFFFFF
//   console.log(rgbToHexa(125, 244, 255)); // #7D15FF
// 7
// function generateColors(colorType, n) {
//     if (colorType === 'hexa') {
//       return arrayOfHexaColors(n);
//     } else if (colorType === 'rgb') {
//       return arrayOfRGBColors(n);
//     } else {
//       throw new Error(Invalid color type: ${colorType});
//     }
//   }
  
//   function arrayOfHexaColors(n) {
//     const hexaColors = [];
//     for (let i = 0; i < n; i++) {
//       let hexaColor = '#';
//       for (let j = 0; j < 6; j++) {
//         hexaColor += Math.floor(Math.random() * 16).toString(16);
//       }
//       hexaColors.push(hexaColor);
//     }
//     return hexaColors;
//   }
  
//   function arrayOfRGBColors(n) {
//     const rgbColors = [];
//     for (let i = 0; i < n; i++) {
//       const red = Math.floor(Math.random() * 256);
//       const green = Math.floor(Math.random() * 256);
//       const blue = Math.floor(Math.random() * 256);
//       const rgbColor = rgb(${red}, ${green}, ${blue});
//       rgbColors.push(rgbColor);
//     }
//     return rgbColors;
//   }
  
//   console.log(generateColors('hexa', 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
//   console.log(generateColors('hexa', 1)); // '#b334ef'
//   console.log(generateColors('rgb', 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
//   console.log(generateColors('rgb', 1)); // 'rgb(33,79, 176)'

// 8
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
// const numbers = [1, 2, 3, 4, 5];
// const shuffledNumbers = shuffleArray(numbers);
// console.log(shuffledNumbers);

// 9
// function factorial(n) {
//     if (n < 0) {
//       throw new Error('Invalid input: n must be a non-negative integer');
//     }
  
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   // Example usage
//   const num = 5;
//   const result = factorial(num);
//   console.log(Factorial of ${num} is ${result});


//10
// function isEmpty(value) {
//     if (value === null || value === undefined || value === '') {
//       return true;
//     } else if (typeof value === 'object') {
//       if (Array.isArray(value)) {
//         return value.length === 0;
//       } else {
//         return Object.keys(value).length === 0;
//       }
//     } else {
//       return false;
//     }
//   }
//   console.log(isEmpty('')); 
//   console.log(isEmpty(null)); 
//   console.log(isEmpty(undefined)); 
//   console.log(isEmpty([])); 
//   console.log(isEmpty({})); 
//   console.log(isEmpty('hello')); 
//   console.log(isEmpty([1, 2, 3])); 
//   console.log(isEmpty({ name: 'John', age: 30 }));
    

//11
// function sum(...args) {
//     let total = 0;
//     for (const arg of args) {
//       total += arg;
//     }
//     return total;
//   }

// console.log(sum(1, 2, 3, 4, 5)); // 15
// console.log(sum(10, 20)); // 30
// console.log(sum(100, 200, 300)); // 600

//12
// function sumOfArrayItems(testList) {
//     if (testList.every((num) => typeof num === 'number')) {
//       return testList.reduce((acc, item) => acc + item, 0);
//     } else {
//       return 'Массив должен содержать только числовые значения';
//     }
//   }
// const testList = [1, 2, 3, 4, 5];
// const sum = sumOfArrayItems(testList);
// console.log(sum);                           // 15

// const mixedList = [1, 2, 'three', 4, 5];
// const mixedSum = sumOfArrayItems(mixedList);
// console.log(mixedSum); 


//13
// function average(testList) {
//     let sum = 0;
//     let count = 0;
//     testList.reduce((acc, item) => {
//       if (typeof item === 'number') {
//         sum += item;
//         count++;
//       }
//       return acc;
//     }, 0);
//     return sum / count;
//   }
  

//14
// function modifyArray(arr) {
//     if (arr.length < 5) {
//       return 'item not found';
//     } else {
//       arr[4] = arr[4].toUpperCase();
//       return arr;
//     }
//   }
  
//   console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
  
//   console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));
  
//   console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));


//15
// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
// console.log(isPrime(11)); 
// console.log(isPrime(15)); 
// console.log(isPrime(23)); 

//16
// function allUnique(arr) {
//     const uniqueSet = new Set(arr);
//     return uniqueSet.size === arr.length;
//   }
//   const arr1 = [1, 2, 3, 4, 5];
//   const arr2 = [1, 2, 3, 4, 2];
  
//   console.log(allUnique(arr1)); 
//   console.log(allUnique(arr2)); 
    
//17
// function isSameDataType(arr) {
//     if (arr.length === 0) return true;
  
//     const dataType = typeof arr[0];
  
//     for (const item of arr) {
//       if (typeof item !== dataType) return false;
//     }
  
//     return true;
//   }
//   const arr1 = ['apple', 'banana', 'orange'];
//   const arr2 = [1, 2, 3];
//   const arr3 = [true, false, true];
//   const arr4 = [1, 'apple', 3];
  
//   console.log(isSameDataType(arr1)); // true
//   console.log(isSameDataType(arr2)); // true
//   console.log(isSameDataType(arr3)); // true
//   console.log(isSameDataType(arr4)); // false
    
// //18
// function isValidVariable(variableName) {
//     if (!variableName) return false;
  
//     const regex = /^[a-zA-Z$_][a-zA-Z0-9_]*$/;
//     return regex.test(variableName);
//   }
//   console.log(isValidVariable('myVariable123'));  
//   console.log(isValidVariable('$myVariable')); 
//   console.log(isValidVariable('_myVariable')); 
//   console.log(isValidVariable('1myVariable')); 
//   console.log(isValidVariable('my-variable')); 
    

// 19 
// function sevenRandomNumbers() {
//     const generatedNumbers = [];
//     while (generatedNumbers.length < 7) {
//       const randomNumber = Math.floor(Math.random() * 10);
//       if (!generatedNumbers.includes(randomNumber)) {
//         generatedNumbers.push(randomNumber);
//       }
//     }
//     return generatedNumbers;
//   }
  
//   console.log(sevenRandomNumbers());
//   const uniqueRandomNumbers = sevenRandomNumbers();
//   console.log(uniqueRandomNumbers);

// 20
// function reverseCountries(countries) {
//     const reversedCountries = countries.slice();
  
//     reversedCountries.reverse();
  
//     return reversedCountries;
//   }
  
//   const countries = ['India', 'USA', 'China', 'Japan', 'France'];
//   const reversedCountries = reverseCountries(countries);
//   console.log(reversedCountries);
