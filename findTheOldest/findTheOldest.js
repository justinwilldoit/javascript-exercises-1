let findTheOldest = function(people) {
    let total = 0
    let OldestPerson = {}
  people.reduce((prev, curr) => {
    if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
      total = (curr.yearOfDeath - curr.yearOfBirth);
      OldestPerson = curr;
    };
  }, 0);
    return OldestPerson
  }
  

// let findTheOldest = function(array) {
//     let index;
//     let oldestAge = 0;
//     let oldestPerson = '';
//     let oldestObj = {};
//     for (i = 0; i < array.length; i++) {
//       if (array[i].yearOfDeath === undefined) {
//         currentAge = new Date().getFullYear() - array[i].yearOfBirth;
//         currentPerson = array[i].name;
//         currentObj = array[i];
//       } else {
//       currentAge = array[i].yearOfDeath - array[i].yearOfBirth;
//       currentPerson = array[i].name;
//       currentObj = array[i];
//       }
//       if (currentAge > oldestAge) {
//         oldestAge = currentAge;
//         oldestPerson = currentPerson;
//         oldestObj = currentObj;
//       }
//     }
//     return oldestObj;
// }

module.exports = findTheOldest
