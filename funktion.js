// 1
// const numbers = [1, 2, 3];

// numbers.forEach(number => console.log(number));
// 2 for Each   
// function logNumber(number) {
//     console.log(number);
//   }
  
//   const numbers = [1, 2, 3];
  
//   numbers.forEach(logNumber);
  
// map
// function squareNumber(number) {
//     return number * number;
//   }
  
//   const numbers = [1, 2, 3];
  
//   const squares = numbers.map(squareNumber);

// filter
// function isEven(number) {
//     return number % 2 === 0;
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   const evenNumbers = numbers.filter(isEven);
  
// reduce
// function sumNumbers(accumulator, currentValue) {
//     return accumulator + currentValue;
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   const sum = numbers.reduce(sumNumbers, 0);

//3
// countries.forEach(country => console.log(country));


// 4. 
// names.forEach(name => console.log(name));


// 5. 
// numbers.forEach(number => console.log(number));


// 6. 
// const countriesUpperCase = countries.map(country => country.toUpperCase());
// console.log(countriesUpperCase);


// 7. 
// const countriesLength = countries.map(country => country.length);
// console.log(countriesLength);


// 8. 
// const squaredNumbers = numbers.map(number => number * number);
// console.log(squaredNumbers);


// 9. 
// const namesUpperCase = names.map(name => name.toUpperCase());
// console.log(namesUpperCase);


// 10. 
// const productPrices = products.map(product => product.price);
// console.log(productPrices);


// 11. 
// const countriesContainingLand = countries.filter(country => country.includes('land'));
// console.log(countriesContainingLand);


// 12. 
// const countriesWithSixCharacters = countries.filter(country => country.length === 6);
// console.log(countriesWithSixCharacters);


// 13. 
// const countriesWithSixOrMoreLetters = countries.filter(country => country.length >= 6);
// console.log(countriesWithSixOrMoreLetters);


// 14. 
// const countriesNotStartingWithE = countries.filter(country => !country.startsWith('E'));
// console.log(countriesNotStartingWithE);


// 15. 
// const pricesWithValues = products.filter(product => product.price !== '');
// console.log(pricesWithValues);


// 16. 
// function getStringLists(arr) {
//   return arr.filter(item => typeof item === 'string');
// }

// console.log(getStringLists([1, 'hello', 3, 'world']));


// 17. 
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


// 18. 
// const sentence = countries.reduce((acc, country, index) => {
//   if (index === countries.length - 1) {
//     return acc + 'and ' + country + ' are north European countries';
//   } else {
//     return acc + country + ', ';
//   }
// }, '');
// console.log(sentence);


//level 2
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]

//1
// const totalPrice = products
//   .map(product => product.price)
//   .filter(price => !!price && !isNaN(price))
//   .reduce((acc, curr) => acc + parseFloat(curr), 0);

// console.log(totalPrice);


//2
// const sumOfPrices = products.reduce((acc, curr) => {
//   const price = parseFloat(curr.price);
//   return !isNaN(price) ? acc + price : acc;
// }, 0);

// console.log(sumOfPrices);

//3

// function categorizeCountries(pattern) {
//   return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
// }

// const countriesWithLand = categorizeCountries('land');
// console.log(countriesWithLand);

//4
// function countInitialLetters() {
//   const countMap = {};
//   countries.forEach(country => {
//     const initial = country[0].toUpperCase();
//     countMap[initial] = (countMap[initial] || 0) + 1;
//   });
//   return Object.entries(countMap).map(([letter, count]) => ({ letter, count }));
// }

// const letterCounts = countInitialLetters();
// console.log(letterCounts);

//5
// function getFirstTenCountries() {
//   return countries.slice(0, 10);
// }

// const firstTen = getFirstTenCountries();
// console.log(firstTen);

//6
// function getLastTenCountries() {
//   return countries.slice(-10);
// }

// const lastTen = getLastTenCountries();
// console.log(lastTen);

//7
// function mostUsedInitialLetter() {
//   const countMap = {};
//   countries.forEach(country => {
//     const initial = country[0].toUpperCase();
//     countMap[initial] = (countMap[initial] || 0) + 1;
//   });

//   let maxCount = 0;
//   let mostUsedLetter = '';
//   for (const letter in countMap) {
//     if (countMap[letter] > maxCount) {
//       maxCount = countMap[letter];
//       mostUsedLetter = letter;
//     }
//   }
//   return mostUsedLetter;
// }

// const mostUsed = mostUsedInitialLetter();
// console.log(mostUsed);


//level 3
// 1
// const countries = {
//   Albania: {
//     name: 'Albania',
//     capital: 'Tirana',
//     population: 2.88,
//     languages: ['Albanian'],
//   },
//   American: {
//     name: 'American Samoa',
//     capital: 'Fagatogo',
//     population: 55,
//     languages: ['English', 'Samoan'],
//   },
//   Japan: {
//     name: 'Japan',
//     capital: 'Tokyo',
//     population: 126476461,
//     languages: ['Japanese'],
//   },
// };

// for (const country in countries) {
//   console.log(Country: ${countries[country].name});
//   console.log(Capital: ${countries[country].capital});
//   console.log(Population: ${countries[country].population});
//   console.log(Languages: ${countries[country].languages.join(', ')});
//   console.log('--------------------------');
// }

// 2
// function mostSpokenLanguages(countries, n) {
//     const languageMap = new Map();
//     for (const country of countries) {
//       for (const language of country.languages) {
//         if (languageMap.has(language)) {
//           languageMap.set(language, languageMap.get(language) + 1);
//         } else {
//           languageMap.set(language, 1);
//         }
//       }
//     }
  
//     const languageArray = Array.from(languageMap.entries());
//     languageArray.sort((a, b) => b[1] - a[1]);
  
//     return languageArray.slice(0, n).map(([language, count]) => ({ country: language, count }));
//   }
  
//   const countries = [
//     { name: "Afghanistan", languages: ["Pashto", "Dari", "Uzbek"] },
//     { name: "Albania", languages: ["Albanian", "Greek"] },
//     { name: "Algeria", languages: ["Arabic", "French"] },
//     { name: "Andorra", languages: ["Catalan", "Spanish", "French"] },
//   ];
  
//   console.log(mostSpokenLanguages(countries, 10));
//   console.log(mostSpokenLanguages(countries, 3));