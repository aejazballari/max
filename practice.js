// // //bubblesort

// // const a = [5, 7, 1, 10, 9]

// // const bubbleSort = (arr) => {
// //     let tmp;
// //     for(let i=0; i<arr.length; i++) {
// //         for(let j=0; j<arr.length-1; j++){
// //             console.log(i,j);
// //             if(a[j]<a[j+1]){
// //                 tmp = a[j+1];
// //                 a[j+1] = a[j]; // a[2] = 7
// //                 a[j] = tmp // a[1] = 1
// //             }
// //         }
// //     }
// //     return arr
// // }

// // console.log(bubbleSort(a));

// //binarySearch
// let b = [1, 3, 5, 7, 11, 13, 17, 19, 23];
// const binarySearch = (arr, target) => {
//   let startIndex = 0;
//   let endIndex = arr.length - 1;
//   while (startIndex <= endIndex) {
//     let middleIndex = Math.floor((startIndex + endIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return "Your target found at index " + middleIndex;
//     }
//     if (target > arr[middleIndex]) {
//       startIndex = middleIndex + 1;
//     }
//     if (target < arr[middleIndex]) {
//       endIndex = middleIndex - 1;
//     }
//   }
//   return "Target not found";
// };

// console.log(binarySearch(b, 17));

// //mergeSort

// const c = [5, 8, 1, 10, 15, 2, 6]
// const mergeSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let middle = Math.floor(arr.length / 2);
//   let left = arr.slice(0, middle);
//   let right = arr.slice(middle);
//   return merge(mergeSort(left), mergeSort(right)); // [5, 8] [1,10]
// }

// const merge = (left, right) => {
//     let res = [], leftIndex=0, rightIndex=0;
//     while(leftIndex <left.length && rightIndex < right.length) {
//         if(left[leftIndex]<right[rightIndex]){
//             res.push(left[leftIndex])
//             leftIndex++ //2
//         } else {
//             res.push(right[rightIndex]) //[1, 5, 8, 10]
//             rightIndex++ //1
//         }
//     }
//     return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }

// console.log(mergeSort(c));

// const fruits = ["Orange", "Banana", "Lemon"];
// // we can access each element of an array by their index.
// const fruit1 = fruits[0];
// //or else we can use destructuring to get those elements without using indexes
// const [first, ...rest] = fruits;
// console.log(first, rest, fruits);

// // console.log("john smith".split(" "));

// //     const prizes = ["A Unicorn!", "A Hug!", "Fresh Laundry!"];
// //     for (let b = 0; b < prizes.length; b++) {
// //       // For each of our buttons, when the user clicks it...
// //       document.getElementById(`btn-${b}`).onclick = () => {
// //         console.log(b);
// //         // Tell her what she's won!
// //         // alert(prizes[btnNum]);
// //       };
// //       console.log(b);
// //     }

const obj1 = {
  name: "Putin",
  city: "Moscow",
  country: "Russia",
};

const obj2 = {
  name: "Aejaz",
  city: "Anantapur",
  country: "Andhra Pradesh",
};

const str = "hello";
console.log(...str);
console.log([...str]);

const newArr = [1, 2, 3, 4, 5];
console.log(...newArr);
const secondArr = [6, 7, 8, 9, 10];
console.log([...newArr, ...secondArr]);

// console.log(...obj1);

const { name, ...Rest } = obj1;
console.log(name, Rest);
console.log((newObj = { ...obj1, ...obj2 }));
console.log({ ...obj1, lastName: "Vladimir" });
console.log(obj2);

// const fruits = [ 'orange', 'apple', 'banana', 'lemon']
// const [first, ...Rest] = fruits;
// console.log(first, Rest);

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;

  console.log(average);
};

getAverage("putin", 100, 67, 89, 92);

const int = [-4, 3, -9, 0, 4, 1];

function plusMinus() {}

console.log(plusMinus());

const people = (person) => {
  if (person === "aejaz") {
    console.log(`Hi ${person}, where are you from`);
    return function (age, state) {
      console.log(
        `Hi, my name is ${person} and I'm ${age} years old, I am from ${state}`
      );
    };
  }
};

const person = people("aejaz");
person(18, "andhra");

function someone() {
  var size1 = 10;
}
someone();

// // Complete the kangaroo function below.
// const date = new Date()
// console.log(date.setDate(date.getDate()+1));

// function migratoryBirds(arr) {
//     // imperative
//     let type = []
//     let type1 = 0;
//     let type2 = 0;
//     let type3 = 0;
//     let type4 = 0;
//     let type5 = 0;
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] === 1) {
//             type1++
//         }
//         if (arr[i] === 2) {
//           type2++;
//         }
//         if (arr[i] === 3) {
//           type3++;
//         }
//         if (arr[i] === 4) {
//           type4++;
//         }
//         if (arr[i] === 5) {
//           type5++;
//         }
//     }
//     type = [type1, type2, type3, type4, type5]
//     type
//     return type3;

//     //declarative
// }
// console.log(migratoryBirds([1,1,2,2,3]));

//Angry Professor
function angryProfessor(k, a) {
  let onTime = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      onTime.push(a[i]);
    }
  }
  if (onTime.length >= k) {
    return "NO";
  } else {
    return "YES";
  }
}
console.log(angryProfessor(3, [-3, -1, 4, 2]));

// catAndMouse function.
function catAndMouse(x, y, z) {
  if (Math.abs(z - x) == Math.abs(z - y)) {
    return "Mouse C";
  }
  if (Math.abs(z - x) > Math.abs(z - y)) {
    return "Cat B";
  } else {
    return "Cat A";
  }
}
console.log(catAndMouse(1, 2, 3));

// Bill Division.
function bonAppetit(bill, k, b) {
  let sum = 0;
  let alone = bill[k];
  for (let i = 0; i < bill.length; i++) {
    sum += bill[i];
  }
  let shared = (sum - alone) / 2;
  if (shared == b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - shared);
  }
}

bonAppetit([3, 10, 2, 9], 1, 12);
console.log(bonAppetit([3, 10, 2, 9], 1, 7));
