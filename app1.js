const arr = [10, 80, 21, 513, 12, 40, 9, 37, 94, 100, 150, 120];

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

const isEqual = (obj1, obj2) => {
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);
  if (obj1keys.length !== obj2keys.length) {
    return false;
  }

  for (key of obj1keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(isEqual(obj1, obj2));

const { name, state, ...rest } = obj1;

console.log(name, state);

const arr1 = ["car", "book", "pencil", "school", "collage"];

const [a, b, c, ...rest] = arr1;
console.log(a, b, c, rest);

const firstName = "aejaz";
const greet = "happy birthday";

console.log(`${greet} ${firstName}`);
