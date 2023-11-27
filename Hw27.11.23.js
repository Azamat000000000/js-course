//1
// function get() {
//     return (Date.now() % 100) + 1; 
// }

// function sum() {
//     let number1 = get();
//     let number2 = get();
//     return number1 + number2;
// }

// let result = sum();
// console.log(result); 

//2 
// function sum(number) {
//     console.log(number % 2 === 0);
// }

// sum(6); 
// sum(9); 

//3 Реализуйте функцию, вычисляющую факториал числа.

// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1; 
//     } else {
//         let result = 1;
//         for (let i = 2; i <= number; i++) {
//             result *= i; 
//         }
//         return result;
//     }
// }
// let num = 5; 
// let result = factorial(num);
// console.log(`Факториал числа ${num} = ${result}`);

//4
// function reverseString(str) {
//     let reversedStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
//     return reversedStr;
//   }
//   let str = "Hello, world!";
//   let reversedStr = reverseString(str);
//   console.log(reversedStr);
    
//5
// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax([3, 5, 1, 8, 2]));

//6
// const word = "madam";
// const isPalindrome = Palindrome(word);
// console.log(isPalindrome); // true

// function Palindrome(word) {
//     return word.split("").reverse().join("") === word;
//   }
  
// const word = "adam";
// const isPalindrome = Palindrome(word);
// console.log(isPalindrome); // false
  
// function Palindrome(word) {
//       return word.split("").reverse().join("") === word;
//     }

// 7
// function lol(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//       sum += number;
//     }
//     return sum / numbers.length;
//   }
//   let numbers = [1, 2, 3, 4, 5];
//   let average = lol(numbers);
//   console.log(average); 
  
// 8
// function capitalizeFirstLetter(sentence) {
//     return sentence.replace(/\b(\w)/g, (m, c) => c.toUpperCase());
//   }
//   let str = "hello, world!";
//   let main = capitalizeFirstLetter(str);
//   console.log(main); 
    
//9
// function remove(arr) {
//     return arr.filter((value, index, self) => {
//         return self.indexOf(value) === index;
//     });
// }

// let ar = [1, 2, 2, 3, 4, 4, 5]; 
// let li = remove(ar);
// console.log(li); 

//10
// function celsius(celsius) {
//     return (celsius * 9/5) + 32;
// }

// let Temperature = 25; 
// let fahr = celsius(Temperature);
// console.log(fahr); 

//11
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let min = 10; 
// let max = 200; 
// let randomNum = getRandomNumber(min, max);
// console.log(randomNum); 

//12
// function count(arr) {
//     let occ = {};

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (element in occ) {
//             occ[element]++;
//         } else {
//             occ[element] = 1;
//         }
//     }

//     return occ;
// }

// let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; 
// let occ = count(array);
// console.log(occ); 

//13
// function findSecond(arr) {
//     if (arr.length < 2) {
//         return 'Массив должен содержать как минимум два элемента';
//     }

//     let min = Infinity;
//     let secondMin = Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             secondMin = min;
//             min = arr[i];
//         } else if (arr[i] < secondMin && arr[i] !== min) {
//             secondMin = arr[i];
//         }
//     }

//     if (secondMin === Infinity) {
//         return 'Второе наименьшее число не найдено';
//     }

//     return secondMin;
// }

// let array = [4, 1, 5, 2, 3]; 
// let secondMin = findSecond  (array);
// console.log(secondMin); 

// 14
// function sort(arrayOfStrings) {
//     return arrayOfStrings.sort();
// }

// let strings= ["apple", "orange", "banana", "grape"];
// let sorted= sort(strings);

// console.log(sorted);

// 15
// function Area(radius) {
//     return radius ** 2 * Math.PI;
//   }
//   const radius = 5;
//   const area = Area(radius);
//   console.log(area); 

// 16
// function contains(str) {
//     return /^\d+$/.test(str);
// }

// const str1 = "1234567890";
// const str2 = "123abc456";

// console.log(contains(str1));
// console.log(contains(str2)); 

// 17
// function Arrays(array1, array2) {
//     let result = [];
//     let index1 = 0;
//     let index2 = 0;
//     while (index1 < array1.length && index2 < array2.length) {
//       if (array1[index1] <= array2[index2]) {
//         result.push(array1[index1]);
//         index1++;
//       } else {
//         result.push(array2[index2]);
//         index2++;
//       }
//     }
//     result.push(...array1.slice(index1));
//     result.push(...array2.slice(index2));
//     return result;
//   }
// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6];
// const Array = Arrays(array1, array2);
// console.log(Array);

// 18
// function Decimal(binary) {
//     return parseInt(binary, 2);
//   }

//     const binary = "101010";
//     const decimal = Decimal(binary);
//     console.log(decimal);

// 19
// function fibonacci(n) {
//     const san = [0, 1];
//     for (let i = 2; i <= n; i++) {
//       san.push(san[i - 1] + san[i - 2]);
//     }
//     return san[n];
//   }
//   const n = 10;
//   const Number = fibonacci(n);
//   console.log(Number); 

// 20
// function remove(str) {
//     return str.replace(/\s/g, "");
//   }
//     const str = "Это строка с пробелами";
//     const newStr = remove(str);
//     console.log(newStr);