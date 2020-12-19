// for (let i = 1; i < arr.length; i++) {
//   let num = arr[0];
//   if (arr[i] - num > 0) {
//     if (arr[i] > arr[i + 1]) {
//       console.log("max number is " + arr[i]);
//     } else {
//       console.log("max number is " + arr[i + 1]);
//     }
//   }
// }

const arr = [10, 80, 21, 53, 12, 40, 9, 37, 94, 100, 150, 120];

const max = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] < arr[i]) {
      arr[0] = arr[i];
    }
  }
  return arr[0];
};

console.log(max(arr));

const obj1 = {
  name: "Aejaz",
  place: "Anantapur",
  state: "Andhra Pradesh",
};

const obj2 = {
  name: "Aejaz",
  place: "Anantapur",
  state: "Andhra Pradesh",
};

const compare = (obj1, obj2) => {
  let val;
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    val = "objects are equal";
  } else {
    val = "objects are not equal";
  }
  return val;
};

console.log(compare(obj1, obj2));
// console.log(isEqual(obj1, obj2));
