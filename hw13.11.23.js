//1
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }


//   let i = 0;
//   while (i <= 10) {
//     console.log(i);
//     i++;
//   }

//   let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);


//2
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
//   }

//   let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

//3
// const n = 5;
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

//4
// for (let i = 0; i < 5; i++) {
//     let lime = '';
//     for (let j = 0; j <= i; j++) {
//       lime += '*';
//     }
//     console.log(line);
//   }
  

//5
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
//   }
  

//6
    // console.log(" i    i^2   i^3");
    // for (let i = 0; i <= 10; i++) {
    // console.log(`${i}    ${i ** 2}    ${i ** 3}`);
    // }


//7
// console.log("жұп:");
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//8
// console.log("тақ:");
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


//9
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//   }



//10
// let san = 0;

// for (let i = 0; i <= 100; i++) {
//     san += i;
// }

// console.log(san);

//11
// let sum = 0;
// let san = 0;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
       
//         sum += i;
//     } else {
     
//         san += i;
//     }
// }

// console.log(sum);
// console.log( san);


//12
// let sum = 0;
// let san = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   } else {
//     san += i;
//   }
// }

// const resultArray = [sum, san];
// console.log(resultArray);


//13
// const sum = [];

// for (let i = 0; i < 5; i++) {
//     sum.push(Math.floor(Math.random() * 100));
// }

// console.log(sum);

//14
// function generateRandomNumbersArray(count, min, max) {
//     let randomNumbers = [];
//     for (let i = 0; i < count; i++) {
//       let random;
//       do {
//         random = Math.floor(Math.random() * (max - min + 1)) + min;
//       } while (randomNumbers.includes(random));
//       randomNumbers.push(random);
//     }
//     return randomNumbers;
//   }
  
//   let randomArray = generateRandomNumbersArray(5, 1, 100);
//   console.log(randomArray);

//15
function generateRandomId(length = 6) {
    const simvol = '5j2khz';
    let id = '';
    for (let i = 0; i < length; i++) {
      id += simvol[Math.floor(Math.random() * simvol.length)];
    }
    return id;
  }
  
  const randomId = generateRandomId();
  
  console.log(randomId);