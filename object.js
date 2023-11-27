//1
//const dog = { }

//2
// const dog = {}
// console.log(dog);

//3
// let dog = {
//   name: 'Rex',
//   legs: 4,
//   color: 'brown',
//   age: 3,
//   bark: function() {
//     return 'woof woof';
//   }
// };
// console.log(dog.bark);

//4  Получение имени, ног, цвета, возраста и значения лая из объекта собаки
// let dog = {
//   name: 'Rex',
//   legs: 4,
//   color: 'brown',
//   age: 3,
// };
// console.log(dog);

//5 Устанавливаем новые свойства объекта dog: breed, getDogInfo
// let dog = {};
// dog.breed = 'Akita-inu';

// dog.getDogInfo = function() {
//   return `This dog is a ${this.breed}.`;
// };

// console.log(dog.breed); 
// console.log(dog.getDogInfo()); 


//LEVEL 2


  // const users = {
  //   Alex: {
  //     email: 'alex@alex.com',
  //     skills: ['HTML', 'CSS', 'JavaScript'],
  //     age: 20,
  //     isLoggedIn: false,
  //     points: 30
  //   },
  //   Asab: {
  //     email: 'asab@asab.com',
  //     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
  //     age: 25,
  //     isLoggedIn: false,
  //     points: 50
  //   },
  //   Brook: {
  //     email: 'daniel@daniel.com',
  //     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
  //     age: 30,
  //     isLoggedIn: true,
  //     points: 50
  //   },
  //   Daniel: {
  //     email: 'daniel@alex.com',
  //     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
  //     age: 20,
  //     isLoggedIn: false,
  //     points: 40
  //   },
  //   John: {
  //     email: 'john@john.com',
  //     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
  //     age: 20,
  //     isLoggedIn: true,
  //     points: 50
  //   },
  //   Thomas: {
  //     email: 'thomas@thomas.com',
  //     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  //     age: 20,
  //     isLoggedIn: false,
  //     points: 40
  //   },
  //   Paul: {
  //     email: 'paul@paul.com',
  //     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
  //     age: 20,
  //     isLoggedIn: false,
  //     points: 40
  //   }
  // }


//1   Найдите человека, который обладает многими навыками в объекте users.
// let mostSkilledPerson = null;
// let maxSkills = 0;

// for (const user of Object.keys(users)) {
//   const skillsCount = users[user].skills.length;
//   if (skillsCount > maxSkills) {
//     maxSkills = skillsCount;
//     mostSkilledPerson = user;
//   }
// }

// console.log(mostSkilledPerson); 


//2 Количество вошедших в систему пользователей, количество пользователей, набравших больше 50 баллов от следующего объекта.  
// let logged = 0;
// let Points = 0;

// for (const user in users) {
//   if (users[user].isLoggedIn) {
//     logged++;
//   }
  
//   if (users[user].points >= 50) {
//     Points++;
//   }
// }

// console.log(`Жүйеге кірген пайдаланушылар:${logged}`);
// console.log(`50 ұпай жинаған пайдаланушылар:${Points}`);

// 3
//   const mern = ['MongoDB', 'Express', 'React', 'Node'];

//   const mernDevelopers = [];

//   for (const userName in users) {
//     const user = users[userName];
//     const userSkills = user.skills;

//     if (userSkills.includes(...mern)) {
//       mernDevelopers.push(userName);
//     }
//   }

//   console.log(mernDevelopers); 

//4
  // const updatedUsers = {
  //   ...users,
  //   YourName: {
  //     email: 'dazay@gmail.com',
  //     skills: ['HTML', 'CSS', 'JavaScript'],
  //     age: 25,
  //     isLoggedIn: true,
  //     points: 60
  //   }
  // };
  // console.log('Original Users Object:', users);
  // console.log('Updated Users Object with Your Name:', updatedUsers);

//5   
  // const keys = Object.keys(users);  
  // console.log('Keys of Users Object:', keys); 

//6
// const values = Object.values(users);
// console.log(values); 

//7
// const countries = {
//   USA: {
//     name: 'United States of America',
//     capital: 'Washington D.C.',
//     population: 331449281,
//     languages: ['English'],
//   },
//   India: {
//     name: 'India',
//     capital: 'New Delhi',
//     population: 1380004385,
//     languages: ['Hindi', 'English'],
//   },
//   Japan: {
//     name: 'Japan',
//     capital: 'Tokyo',
//     population: 126476461,
//     languages: ['Japanese'],
//   },
// };

// for (const country in countries) {
//   console.log(`Country: ${countries[country].name}`);
//   console.log(`Capital: ${countries[country].capital}`);
//   console.log(`Population: ${countries[country].population}`);
//   console.log(`Languages: ${countries[country].languages.join(', ')}`);
//   console.log('--------------------------');
// }




//LEVEL 3

//1 Создайте объектный литерал с именем personAccount. Он имеет свойства firstName, lastName, incomes, expenses, а также методы totalIncome, totalExpense, accountInfo, addIncome, addExpense и accountBalance. Доходы – это совокупность доходов и их описание, а расходы – это совокупность доходов и их описание.


// const createPersonAccount = (firstName, lastName) => ({
//   firstName,
//   lastName,
//   incomes: [],
//   expenses: [],

//   get totalIncome() {
//     return this.incomes.reduce((total, income) => total + income.amount, 0);
//   },

//   get totalExpense() {
//     return this.expenses.reduce((total, expense) => total + expense.amount, 0);
//   },

//   accountInfo() {
//     return `Account Information for ${this.firstName} ${this.lastName}:\nTotal Income: ${this.totalIncome}\nTotal Expense: ${this.totalExpense}`;
//   },

//   addIncome(description, amount) {
//     this.incomes.push({ description, amount });
//   },

//   addExpense(description, amount) {
//     this.expenses.push({ description, amount });
//   },

//   accountBalance() {02,
//     return this.totalIncome - this.totalExpense;
//   },
// });

// const personAccount = createPersonAccount('John', 'Doe');

// personAccount.addIncome('Salary', 3000);
// personAccount.addIncome('Freelancing', 1000);
// personAccount.addExpense('Rent', 1200);
// personAccount.addExpense('Groceries', 300);

// console.log(personAccount.accountInfo());
// console.log('Current Account Balance:', personAccount.accountBalance());

//2

// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];

//   const products = [
// {
//   _id: 'eedfcf',
//   name: 'mobile phone',
//   description: 'Huawei Honor',
//   price: 200,
//   ratings: [
//     { userId: 'fg12cy', rate: 5 },
//     { userId: 'zwf8md', rate: 4.5 }
//   ],
//   likes: []
// },
// {
//   _id: 'aegfal',
//   name: 'Laptop',
//   description: 'MacPro: System Darwin',
//   price: 2500,
//   ratings: [],
//   likes: ['fg12cy']
// },
// {
//   _id: 'hedfcg',
//   name: 'TV',
//   description: 'Smart TV:Procaster',
//   price: 400,
//   ratings: [{ userId: 'fg12cy', rate: 5 }],
//   likes: ['fg12cy']
// }
// ]

// function signUp(newUser) {  
//     const existingUser = users.find(user => user.email === newUser.email);  
  
//     if (existingUser) {  
//         console.log("User already has an account.");  
  
//     } else {  
//         users.push(newUser);  
//         console.log("User added successfully.");  
//     }  
// }  
  
// const newUser = {  
//     _id: 'unique_id_here',  
//     username: 'NewUser',  
//     email: 'newuser@example.com',  
//     password: 'password123',  
//     createdAt: '11/22/2023 11:00 AM',  
//     isLoggedIn: false  
// };  
  
// signUp(newUser);  
  
// 2 (B) 
// const users = [  
//     const users = [  
//         {  
//             _id: 'ab12ex',  
//             username: 'Alex',  
//             email: 'alex@alex.com',  
//             password: '123123',  
//             createdAt:'08/01/2020 9:00 AM',  
//             isLoggedIn: false

//3
// const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]

// const rateProduct = (productId, userId, rating) => {
//   const product = products.find((prod) => prod._id === productId);
//   if (product) {
//     product.ratings.push({ userId, rate: rating });
//     console.log(`Appraisal ${product.name} - ${rating} star.`);
//   } else {
//     console.log('Product not found!');
//   }
// };

//   const averageRating = (productId) => {
//   const product = products.find((prod) => prod._id === productId);
//   if (product && product.ratings.length > 0) {
//     const totalRatings = product.ratings.reduce((acc, rating) => acc + rating.rate, 0);
//     return totalRatings / product.ratings.length;
//   } else {
//     return 'Пока нет оценок.';
//   }
// };

// rateProduct('aegfal', 'zwf8md', 4); 

// console.log('Averge raitingfor a Laptop:', averageRating('aegfal')); 

//4
// const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]
// function likeProduct(productId, userId) {
//   const product = products.find((prod) => prod._id === productId);

//   if (product) {
//     const likedIndex = product.likes.indexOf(userId);

//     if (likedIndex === -1) {
//       product.likes.push(userId);
//       console.log(`Liked ${product.name}.`);
//     } else {
//       product.likes.splice(likedIndex, 1);
//       console.log(`Unliked ${product.name}.`);
//     }
//   } else {
//     console.log('Product not found!');
//   }
// }

// likeProduct('aegfal', 'zwf8md'); 
// likeProduct('hedfcg', 'fg12cy'); 

// console.log('Updated Products:', products);