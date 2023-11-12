//1
// let emptyArray = [];

// 2
// let arrayWithMoreThan5Elements = [1, 2, 3, 4, 5, 6, 7];
// let arrayLength = arrayWithMoreThan5Elements.length;

// 3
// let firstElement = arrayWithMoreThan5Elements[0];
// let middleElement = arrayWithMoreThan5Elements[Math.floor(arrayLength / 2)];
// let lastElement = arrayWithMoreThan5Elements[arrayLength - 1];

// 3
// let mixedDataTypes = [1, 'two', true, { key: 'value' }, null];
// let mixedDataTypesLength = mixedDataTypes.length;

// 4
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 5
// console.log(itCompanies);

// 6
// console.log('Количество компаний:', itCompanies.length);

// 7
// console.log('Первая компания:', itCompanies[0]);
// console.log('Средняя компания:', itCompanies[Math.floor(itCompanies.length / 2)]);
// console.log('Последняя компания:', itCompanies[itCompanies.length - 1]);

// 8
// itCompanies.forEach(company => console.log(company));

// 9
// itCompanies.forEach(company => console.log(company.toUpperCase()));

// 10
// console.log(itCompanies.join(', ') + ' — крупные IT-компании.');

// 11
// let companyToCheck = 'Google';
// if (itCompanies.includes(companyToCheck)) {
//   console.log(`${companyToCheck} существует в массиве.`);
// } else {
//   console.log(`${companyToCheck} не найдена в массиве.`);
// }

// 12
// let companiesWithMoreThanOneO = itCompanies.filter(company => (company.match(/o/gi) || []).length > 1);
// console.log('Компании с более чем одной буквой "о":', companiesWithMoreThanOneO);

// 13
// itCompanies.sort();
// console.log('Отсортированный массив:', itCompanies);

// 14
// itCompanies.reverse();
// console.log('Реверсированный массив:', itCompanies);

// 15
// let firstThreeCompanies = itCompanies.slice(0, 3);
// console.log('Первые три компании:', firstThreeCompanies);

// 16
// let lastThreeCompanies = itCompanies.slice(-3);
// console.log('Последние три компании:', lastThreeCompanies);

// 17
// let middleCompanyIndex = Math.floor(itCompanies.length / 2);
// let middleCompany = itCompanies.slice(middleCompanyIndex, middleCompanyIndex + 1);
// console.log('Промежуточная компания:', middleCompany);

// 18
// itCompanies.shift();
// console.log('Массив после удаления первой компании:', itCompanies);

// 19
// itCompanies.splice(middleCompanyIndex, 1);
// console.log('Массив после удаления промежуточной компании:', itCompanies);

// 20
// itCompanies.pop();
// console.log('Массив после удаления последней компании:', itCompanies);

// 21
// itCompanies = [];
// console.log('Массив после удаления всех компаний:', itCompanies);

// 22
// const countries = ['Country1', 'Country2', 'Country3'];
// module.exports = countries;

// 23
// const webTechs = ['Tech1', 'Tech2', 'Tech3'];
// module.exports = webTechs;

// 1
// const countries = require('./countries');
// const webTechs = require('./web_techs');

// 2
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// let words = text.replace(/[.,]/g, '').split(' ');
// console.log(words);
// console.log('Количество слов:', words.length);

// 3
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// if (!shoppingCart.includes('Мясо')) {
//   shoppingCart.unshift('Мясо');
// }

// if (!shoppingCart.includes('Сахар')) {
//   shoppingCart.push('Сахар');
// }

// if (shoppingCart.includes('Honey')) {
//   shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
// }

// let indexOfTea = shoppingCart.indexOf('Tea');
// if (indexOfTea !== -1) {
//   shoppingCart[indexOfTea] = 'Зеленый чай';
// }

// 4
// let countryToCheck = 'Ethiopia';
// if (countries.includes(countryToCheck)) {
//   console.log('ETHIOPIA');
// } else {
//   countries.push(countryToCheck);
// }

// 5
// let techToCheck = 'Sass';
// if (webTechs.includes(techToCheck)) {
//   console.log('Sass is a CSS preprocess.');
// } else {
//   webTechs.push(techToCheck);
//   console.log(webTechs);
// }

// 6
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node', 'Express', 'MongoDB'];
// const fullStack = [...frontEnd, ...backEnd];
// console.log(fullStack);

// 1
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// ages.sort((a, b) => a - b);
// let minAge = ages[0];
// let maxAge = ages[ages.length - 1];

// let medianAge = ages.length % 2 === 0
//   ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
//   : ages[Math.floor(ages.length / 2)];

// let averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// let ageRange = maxAge - minAge;

// let diffMinAvg = Math.abs(minAge - averageAge);
// let diffMaxAvg = Math.abs(maxAge - averageAge);

// 2
// let firstTenCountries = countries.slice(0, 10);

// let middleCountryIndex = Math.floor(countries.length / 2);
// let middleCountry = countries.length % 2 === 0
//   ? [countries[middleCountryIndex - 1], countries[middleCountryIndex]]
//   : [countries[middleCountryIndex]];

// 3
// let halfIndex = Math.ceil(countries.length / 2);
// let firstHalf = countries.slice(0, halfIndex);
// let secondHalf = countries.slice(halfIndex);