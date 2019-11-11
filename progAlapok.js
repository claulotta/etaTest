// 1. feladat

// number (integer)
const a = 1;

// number (float)
const b = 3.14;

// string
const c = 'Klau';

// boolen
const d = true;

// null
const e = null;

// undefined
const f;

// array
const g = [1, 2, 3, 4, 'Sanyi'];

// object
const h = {
i: 'piszkos',
j: '12',
};

// 2. feladat

// 3. feladat
let array = [1, 2, 3, 4, 5];

const sumOfArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(sumOfArray(array));

// 4. feladat
const countElement = (element, array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      counter++;
    }
  }
  return counter;
};
console.log(countElement(4, array));

// 5. feladat
let vegetable = 'brokkoli';
switch (vegetable) {
  case 'krumpli':
    console.log('Sültkrumplit kérek!');
    break;
  case 'brokkoli':
    console.log('Brokkoli krémlevest kérek!');
    break;
  case 'zeller':
    console.log('Ma inkább nem eszek.');
    break;
  default:
    console.log('Ezt biztos, hogy nem ezsem meg.');
}

// 6. feladat
const intersection = (array1, array2) => {
  const inters = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        inters.push(array1[i]);
        break;
      }
    }
  }
  return inters;
};

console.log('Intersection: ', intersection([1, 2, 3, 4, 3], [3, 6, 4, -1, 3]));
