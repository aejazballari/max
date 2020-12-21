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

// Comparing two object values without using built-in methods
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

// Practicing object and array destructing

const { name, place, state } = obj1;

console.log(name, place, state);

const arr1 = ["car", "book", "pencil"];

const [a, b, c] = arr1;
console.log(a, b, c);

const firstName = "aejaz";
const greet = "happy birthday";

console.log(`${greet} ${firstName}`);

// candies eaten by children challenge
const candies = (number, childs) => Math.floor(number / childs) * childs;

console.log(candies(25, 4));

// deposit profit challenge

const depositeProfit = (deposit, rate, threshold) => {
  let year = 0;
  let currentValue = deposit;
  while (threshold > currentValue) {
    currentValue += currentValue * (rate / 100);
    year++;
  }
  return year;
};
console.log(depositeProfit(100, 20, 170));

// chunkey monkey challenge

function chunkeyMonkey(value, size) {
  // let first = value.slice(0,size);
  // let second = value.slice(size)
  // return [first, second]
  let nested = [];
  let count = 0;
  while (count < value.length) {
    nested.push(value.slice(count, (count += size)));
  }
  return nested;
}

console.log(chunkeyMonkey([1, 2, 3, 4, 5, 6], 4));

// century from year challenge

function century(year) {
  // let approx = Math.ceil(year / 100);
  // return approx;
  if (year % 100 === 0) {
    return year / 100;
  }

  return Math.floor(year / 100) + 1;
}
console.log(century(100));

// reverse a string challenge

function reverse(str) {
  // return str.split('').reverse().join('');
  // let str ='';
  let reversedStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverse("hello"));

// sort by length challenge

function sortByLength(strs) {
  return strs.sort((str1, str2) => str1.length - str2.length);
}
console.log(sortByLength(["aejaz", "jazz", "", "Ballari"]));

// count vowel consonant challenge

function countVowelConsonent(str) {
  // let vowel = ['a', 'e', 'i', 'o','u'];
  vowelObject = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  let arr = str.split("");
  let vowelArr = Object.keys(vowelObject);
  console.log(vowelArr);
  const count = arr.reduce((total, current) => {
    if (vowelArr.includes(current)) {
      return total + 1;
    }
    return total + 2;
  }, 0);
  return count;
}

console.log(countVowelConsonent("aejaz ahmed"));
