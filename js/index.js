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
// console.log(contacts[0].firstName !== 'Akira');
// console.log(contacts[0].firstName === 'Akira');

function lookUpProfile(name, prop) {
  let tmp;
  // for (let i = 0; i < contacts.length; i++) {
  //   if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
  //     return contacts[i][prop];
  //   }
  // }
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      tmp = 'No such contact';
      // } else if (!contacts[i].hasOwnProperty(prop)) {
      //     return 'No such property';
      // }
    } else {
      tmp = 'else';
    }
  }
  return tmp;
}
console.log(lookUpProfile('Akira', 'address'));
