// function stringToArray(string) {
//     const a = [''];
//     for (let letter of string) {
//         if (letter !== ' ') {
//             a[a.length - 1] += letter;
//         } else {
//             a.push('');
//         }
//     }
//     return a;
// }

// const dog = {
//   name: 'Camper',
//   legs: 4,
//   tails: 1,
// };

// dog.friends = 'Jack';
// console.log(dog);

// function checkObj(obj, checkProp) {
//   return obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';
// }
// console.log(checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift'));

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
/*
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  }
  if (prop === 'tracks' && !records[id].hasOwnProperty('tracks')) {
    records[id].tracks = [value];
  }
  if (prop === 'tracks' && value !== '') {
    records[id].tracks.push(value);
  }
  if (value === '') {
    delete records[id][prop];
  }
  return records;
}
updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
console.log(recordCollection);
*/
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion
/*
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    console.log('second ' + (n));
    return sum(arr, n - 1) + arr[n - 1];
  }
}
*/

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
/*
const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  let tmp = 0;
  let tmp1 = 0;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    }
  }
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      tmp++;
    }
  }
  if (tmp === 0) {
    return "No such contact";
  }
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].hasOwnProperty(prop)) {
      tmp1++;
    }
  }
  if (tmp1 === 0) {
    return "No such property";
  }
}

console.log(lookUpProfile('Akira', 'like'));
*/
/*
function randomFraction() {
  // return Math.round(Math.random() * 20);
  return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}
console.log(randomFraction());

function convertToInteger(str) {
  return parseInt(str, 2)
}
*/
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
/*
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n); //push
    return countArray;
  }
}
console.log(countdown(5));
*/

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
/*
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
}
console.log(rangeOfNumbers(1, 10));
*/

/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  let failureItems = [];
  for (let item of arr) {
    failureItems.push(`<li class="text-warning">${item}</li>`);
  }
  // Only change code above this line

  return failureItems;
}
const failuresList = makeList(result.failure);
*/


function giveMeFive(obj){
  const arr = [];
  for (let key in obj) {
     console.log(key + obj[key]);
  //   if(key.length === 4) {
  //     arr.push(key);
  //   } else {
  //     arr.push(obj[key]);
  //   }
  }
  return arr;
}

const ob = {
  "key1":"value1",
  "key2":"value2", 
  "key3":"value3",
  "key4":"value4", 
  "key5":"value5"
}
console.log(giveMeFive(ob));
