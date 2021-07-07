// const arr = [10, 80, 21, 513, 12, 40, 9, 37, 94, 100, 150, 120];

// const max = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[0] < arr[i]) {
//       arr[0] = arr[i];
//     }
//   }
//   return arr[0];
// };

// console.log(max(arr));

// const obj1 = {
//   name: "Aejaz",
//   place: "Anantapur",
//   state: "Andhra Pradesh",
// };

// const obj2 = {
//   name: "Aejaz",
//   place: "Anantapur",
//   state: "Andhra Pradesh",
// };

// const compare = (obj1, obj2) => {
//   let val;
//   if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
//     val = "objects are equal";
//   } else {
//     val = "objects are not equal";
//   }
//   return val;
// };

// console.log(compare(obj1, obj2));
// // console.log(isEqual(obj1, obj2));

// const isEqual = (obj1, obj2) => {
//   const obj1keys = Object.keys(obj1);
//   const obj2keys = Object.keys(obj2);
//   if (obj1keys.length !== obj2keys.length) {
//     return false;
//   }

//   for (key of obj1keys) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isEqual(obj1, obj2));

// const { name, state, ...rest } = obj1;

// console.log(name, state, rest);

// const arr1 = ["car", "book", "pencil", "school", "collage"];

// const [a, ...restof] = arr1;
// console.log(restof);

// const firstName = "aejaz";
// const greet = "happy birthday";

// console.log(`${greet} ${firstName}`);

// console.log(Object.keys(obj1).length);

// const first = "aejaz";

// console.log([first, rest, restof]);

// // spread and rest operator

// const average = (name, ...avg) => {
//   console.log(name);
//   console.log(avg);
//   for (let i = 0; i < avg.length; i++) {
//     let sum = 0;
//     sum += avg[i];
//     console.log(sum);
//     // avg[0] = avg[0] / arr.length;
//   }
//   return Math.floor(avg[0]);
// };

// console.log(average("aejaz", ...arr));

// //extract each kth

// function extractEachKth(nums, index) {
//   return nums.filter((value, i) => (i + 1) % index);
// }

// console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3));

// // different symbols naive

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const total = array.reduce((acc, curr) => {
//   const multi = curr * 2;
//   acc += multi;
//   return acc;
// }, 0);
// console.log(total);

// // palindrome challenge
// function checkPalindrome(str) {
//   //     let newStr = '';
//   // for(let i = str.length-1; i>=0; i--) {
//   //     newStr += str[i];
//   // }
//   // console.log( newStr);
//   //     if(str.toLowerCase() === newStr.toLowerCase()) {
//   //         return true
//   //     } else {
//   //         return false
//   //     }
//   return str.substr(1) + str.charAt(0);
// }

// console.log(checkPalindrome("racecar"));

// function reverseString(str) {
//   if (str === "")
//     // This is the terminal case that will end the recursion
//     return "";
//   else {
//     console.log(reverseString(str.substr(1)) + str.charAt(0));
//     return reverseString(str.substr(1)) + str.charAt(0);
//   }
// }

// console.log(reverseString("aejaz"));

const arr = [2, 4, 6, 8, 10];

const multiple = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
  }
  return res;
};

const division = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] / 2);
  }
  return res;
};
console.log(multiple(arr));
console.log(division(arr));

const common = (arr, fun) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fun(arr[i]));
  }
  return res;
};

const multi = (input) => input * 2;
const div = (input) => input / 2;

console.log(common(array, multi));
