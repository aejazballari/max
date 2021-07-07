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
const spread = [...arr1, name, place, state];
console.log(spread);
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

// sum odd fibonacci numbers challenge

function sumOddFibonacciNumbers(num) {
  let x = 0;
  let y = 1;
  let res;
  let sum = 0;
  while (y <= num) {
    res = x + y;
    x = y;
    y = res;
    if (x % 2 != 0) {
      sum += x;
    }
  }
  return sum;
}

console.log(sumOddFibonacciNumbers(10));

// adjacent elements product challenge

function adjacentElementsProduct(nums) {
  let largestProduct = nums[0] * nums[1];
  for (let i = 0; i < nums.length - 1; i++) {
    let adjacentProduct = nums[i] * nums[i + 1];
    if (largestProduct < adjacentProduct) {
      largestProduct = adjacentProduct;
    }
  }
  return largestProduct;
}

console.log(adjacentElementsProduct([-2, 4, -7, 3, -9, 5, -6]));

// Avoid Obstacles challenge
function avoidObstacles(nums) {
  const largest = nums.sort((a, b) => a - b)[nums.length - 1];
  for (let i = 1; i < largest + 1; i++) {
    console.log(i);
    if (nums.every((value) => value % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 1, 8, 10, 12, 3, 9]));

// valid time challenge
function validTime(str) {
  const [hours, mins] = str.split(":");
  if (hours > 23 || hours < 0) {
    return false;
  }
  if (mins > 59 || mins < 0) {
    return false;
  }
  return true;
}

console.log(validTime("11:30"));

// maximal adjacent difference

function arrayMaximalAdjacentDifference(nums) {
  let maxDifference = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let absoluteDifference = Math.abs(nums[i] - nums[i + 1]);
    if (maxDifference < absoluteDifference) {
      maxDifference = absoluteDifference;
    }
  }
  return maxDifference;
}
console.log(arrayMaximalAdjacentDifference([2, 5, 7, 9, 1, 0]));

//  insert dashes

function insertDashes(str) {
  //     let str1 = str.split('').join("-").split("- -")
  //   return str1.join(' ')
  let words = str.split(" ");
  let char = words.map((word) => {
    return word.split("").join("-");
  });
  return char.join(" ");
}

console.log(insertDashes("aejaz ahmed ballari"));

// array previous less

function arrayPreviousLess(nums) {
  let newArr = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        newArr.unshift(nums[j]);
        break;
      } else if (j === 0) {
        newArr.unshift(-1);
      }
    }
  }
  return newArr;
}

console.log(arrayPreviousLess([9, 3, 5, 7, 3, 11]));

// compare the Triplets
function compareTriplets(a, b) {
  let score = [];
  let aliceScore = 0;
  let bobScore = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
      console.log(aliceScore);
    } else if (a[i] < b[i]) {
      bobScore++;
    } else {
      aliceScore = aliceScore + 0;
      bobScore = bobScore + 0;
    }
  }
  return [aliceScore, bobScore];
}

console.log(compareTriplets([3, 3, 1], [1, 2, 3]));

// Sorting an array with setTimeout

// let arrSort = [0, 10, 100, 500, 20, 35];

// arrSort.forEach((item) => {
//   setTimeout(() => console.log(item), item);
// });

const listEl = document.getElementById("my-list");
const arrSort = [10, 100, 500, 20, 35];

arrSort.forEach((n) => {
  const itemEl = document.createElement("div");

  itemEl.className = "sorted-list-item";
  itemEl.innerHTML = n;
  itemEl.style.order = n;

  listEl.appendChild(itemEl);
});

//Merge sort
const x = [89, 14, 37, 90, 42, 56, 78, 13, 9];
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  console.log("slipt", left, right);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let res = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++;
    } else {
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
console.log(mergeSort(x));

// bubble sort
let a = [10, 5, 100, 500, 1, 3, 34, 52, 6];
const bubbleSort = (arr) => {
  let tmp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        tmp = a[j + 1];
        console.log(tmp);
        a[j + 1] = a[j];
        a[j] = tmp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(a));

//binary search
let b = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 42, 47, 53];
const binarySearch = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === arr[middleIndex]) {
      return "Your target found at index " + middleIndex;
    }
    if (target > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    }
    if (target < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }
  return "Target not found";
};

console.log(binarySearch(b, 2));

//staircase
const staircase = (n) => {
  let stair = "#";
  let space = "";
  for (let i = 1, j = n - 1; i <= n, j >= 0; i++, j--) {
    // console.log(`${space.repeat(j)}${stair.repeat(i)}`);
    console.log("#".repeat(i).padStart(n));
  }
};

console.log(staircase(6));

//Minimum and Maximum sum
function miniMaxSum(arr) {
  let min = arr[0],
    max = min,
    sum = min;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(sum - max, sum - min);
}

miniMaxSum([1, 2, 3, 4, 5]);

// Finding a max number and its duplicates
function birthdayCakeCandles(candles) {
  let max = candles[0],
    count = 0;
  for (let i = 1; i < candles.length; i++) {
    if (max < candles[i]) {
      max = candles[i];
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (max === candles[i]) {
      count++;
    }
  }
  return count;
}

birthdayCakeCandles([15, 3, 5, 17, 17, , 17, 8, 9, 15]);

// Time conversion 12hour format to 24hour format
function timeConversion(s) {
  let ampm = s.slice(-2);
  let timeArr = s.slice(0, -2).split(":");
  console.log(timeArr);
  if (ampm == "AM" && timeArr[0] == "12") {
    timeArr[0] = "00";
  } else if (ampm == "PM") {
    timeArr[0] = (timeArr[0] % 12) + 12;
  }
  console.log(timeArr.join(":"));
  return timeArr.join(":");
}

timeConversion("06:40:03AM");

// Grading students
function gradingStudents(grades) {
  // PASSING A PRIMITIVE DATA TYPE
  //   let arr = [];
  //   let round;
  //   for(let i=0; i<=20; i++) {
  //     arr.push(i * 5);
  //   }
  //   if(grades <= 40) {
  //       return grades
  //   }
  //   if(grades > 40) {
  //     for (let i = 0; i < arr.length; i++) {
  //       // let round;
  //       if (arr[i] > grades) {
  //         round = arr[i];
  //         console.log(round);
  //         break;
  //       }
  //     }
  //     console.log(round);
  //     if((round-grades) <3 ) {
  //         return round
  //     } else {
  //         return grades
  //     }
  //   }

  // PASSING AN ARRAY OBJECT
  let newArr = [];
  for (let i = 0; i < grades.length; i++) {
    console.log(i);
    if (grades[i] >= 38 && grades[i] % 5 > 2) {
      grades[i] += 5 - (grades[i] % 5);
      newArr.push(grades[i]);
    } else {
      newArr.push(grades[i]);
    }
  }
  return newArr;
}
console.log(gradingStudents([73, 67, 38, 33]));

// countApplesAndOranges function
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let m = apples.length;
  let n = oranges.length;
  let acount = 0,
    ocount = 0;
  for (let i = 0; i < m; i++) {
    apples[i] = apples[i] + a;
    if (apples[i] >= s && apples[i] <= t) {
      acount++;
    }
  }

  console.log(acount);

  for (let i = 0; i < n; i++) {
    oranges[i] = oranges[i] + b;
    if (oranges[i] >= s && oranges[i] <= t) {
      ocount++;
    }
  }
  console.log(ocount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

//kangaroo function
function kangaroo(x1, v1, x2, v2) {
  //DON'T USE LOOPS
  if (x1 < x2 && v1 < v2) {
    return "NO";
  } else {
    if (v1 != v2 && (x2 - x1) % (v1 - v2) == 0) {
      return "YES";
    } else {
      return "NO";
    }
  }
}

console.log(kangaroo(0, 2, 5, 3));

//Breaking records
function breakingRecords(scores) {
  let Minimum = scores[0];
  let Maximum = scores[0];
  let min = 0;
  let max = 0;
  for (let i = 1; i < scores.length; i++) {
    if (Minimum > scores[i]) {
      Minimum = scores[i];
      min++;
    }
    if (Maximum < scores[i]) {
      Maximum = scores[i];
      max++;
    }
  }
  return [max, min];
}
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

//Diagonal difference
function diagonalDifference(arr) {
  let sumLr = 0;
  let sumRl = 0;
  console.log(arr[0][0] + arr[1][1] + arr[2][2]);
  console.log(arr[0][2] + arr[1][1] + arr[2][0]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        sumLr += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        sumRl += arr[i][j];
      }
    }
  }
  return Math.abs(sumLr - sumRl);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);

// Divisible sum pairs

function divisibleSumPairs(n, k, ar) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      //instead using j=i+1, you can use i<j also in if condition
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));

// subarray division

// function solve(s, d, m) {
//   let vc = [];
//   for (let i = 0; i < s.length; i++) {
//     let c = s.slice(i, i + m);
//     // if c the size of m and d equals c's sum then keep it
//     if (c.length === m && d === c.reduce((a, p) => p + a, 0)) {
//       vc.push(c);
//     }
//   }
//   return vc.length;
// }
function birthday(s, d, m) {
  let sum = 0;
  let pieces = 0;
  if (s.length === 1 && s[0] === d) {
    return 1;
  }
  for (let i = 0; i < s.length - (m - 1); i++) {
    console.log(i);
    sum = 0;
    let newArr = s.slice(i, i + m);
    console.log(newArr);
    for (let j = 0; j < m; j++) {
      sum += newArr[j];
      console.log(sum);
    }
    if (sum == d) {
      pieces++;
    }
  }
  return pieces;
}

console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));

//viral advertising
function viralAdvertising(n) {
  let like,
    shared = 5,
    cummulative = 0;
  for (let i = 1; i <= n; i++) {
    like = Math.floor(shared / 2);
    shared = like * 3;
    cummulative += like;
  }
  return cummulative;
}
console.log(viralAdvertising(0));

// save the prisoner
function saveThePrisoner(n, m, s) {
  return (m - 1 + s) % n || n;
}
console.log(saveThePrisoner(5, 5, 2));

//circular array rotation
function circularArrayRotation(a, k, queries) {
  let right, index;
  let result = [];
  for (let i = 0; i < k; i++) {
    right = a.pop();
    a.unshift(right);
  }
  for (let j = 0; j < queries.length; j++) {
    index = queries[j];
    result.push(a[index]);
  }
  return result;
}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

// hurdleRace.
function hurdleRace(k, height) {
  let max = height[0];
  for (let i = 1; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i];
    }
  }
  if (max < k) {
    return 0;
  }
  return max - k;
}
console.log(hurdleRace(7, [1, 6, 3, 5, 2]));

//DesignerPdfViewer

function designerPdfViewer(h, word) {
  //     let char = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //     let arr = word.split('');
  //     console.log(char.length);
  //     let height = [];
  //     console.log(arr);
  //     for(let i=0; i<h.length; i++) {
  //         for(let j=0; j<h.length; j++) {
  //             if(char[i] === arr[j]) {

  //             console.log(i,j);
  //             height.push(h[i])
  //         }

  //         }
  //     }
  //     console.log(height);
  //     let max = height[0];
  //     for(let j=0; j<height.length; j++) {
  //         if(max<height[j]) {
  //             max = height[j]
  //         }
  //     }
  //     console.log(max);
  // return max * word.length;
  let maxHeight = 0;
  for (let c of word) {
    let charHeight = h[c.charCodeAt(0) - 97];
    if (charHeight > maxHeight) maxHeight = charHeight;
  }

  return word.length * maxHeight;
}
console.log(
  designerPdfViewer(
    [
      1,
      3,
      1,
      3,
      1,
      4,
      1,
      3,
      2,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      7,
    ],
    "zabc"
  )
);

//utopianTree
function utopianTree(n) {
  let initial = 1;
  if (n == 0) {
    return initial;
  }
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
      initial++;
    } else {
      initial *= 2;
    }
  }
  return initial;
}
console.log(utopianTree(4));

//Beautiful days

function beautifulDays(i, j, k) {
  // let arr = []
  // let reverse = [];
  // let beautiful = 0;
  // for(let k=i; k<=j; k++) {
  //     console.log(k);
  //     let reverseNum = k.toString().split('').reverse().join('')
  //     arr.push(k)
  //     reverse.push(parseInt(reverseNum));
  // }
  // console.log(arr, reverse);
  // for(let x=0; x<arr.length; x++) {
  //     if((arr[x]-reverse[x])%k === 0){
  //         beautiful++
  //     }
  // }
  // return beautiful
  let count = 0;

  for (let x = i; x <= j; x++) {
    let y = x.toString().split("").reverse().join("");
    let sol = Math.abs((x - y) / k);
    if (Number.isInteger(sol)) {
      count += 1;
    }
  }
  return count;
}
console.log(beautifulDays(949488, 1753821, 5005440));

//Sales by match
function sockMerchant(n, ar) {
  //Method one using sort
  var res = 0;
  console.log(ar.sort());
  for (let i = 0; i < n; i++) {
    console.log(i);
    if (ar[i] == ar[i + 1]) {
      // i++
      console.log(i++);
      res++;
    }
  }
  return res;
  //Method two using object
  // var ones = {},
  //   pairs = 0;
  // for (var i = 0; i < n; i++) {
  //   if (ones.hasOwnProperty(ar[i])) {
  //     pairs++;
  //     delete ones[ar[i]];
  //   } else {
  //     ones[ar[i]] = 0;
  //   }
  // }
  // return pairs;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// pageCount function below.
function pageCount(n, p) {
  let pageTurns = Math.floor(n / 2);
  let totalTurns = Math.floor(p / 2);
  console.log(pageTurns, totalTurns);
  let turnBack = pageTurns - totalTurns;
  // if(totalTurns<turnBack){
  //     return totalTurns
  // } else {
  //     return  turnBack;
  // }
  return Math.min(totalTurns, turnBack);
}
console.log(pageCount(6, 2));

//counting valleys
function countingValleys(steps, path) {
  let curr = 0,
    valley = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      curr++;
      if (curr == 0) {
        valley++;
      }
    } else {
      curr--;
    }
  }
  return valley;
}

console.log(countingValleys(8, ["D", "D", "U", "U", "U", "U", "D", "D"]));

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  let sum = 0,
    max = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      sum = keyboards[i] + drives[j];
      if (sum <= b && sum > max) max = sum;
    }
  }
  //    if(total.length == 0) {
  //        return -1
  //    }
  //    for(let i=0; i<total.length; i++) {
  //        paid = Math.max(total[i]);
  //    }
  return max;
}
// getMoneySpent([40,50,60], [5,8,12], 60);
console.log(getMoneySpent([4], [5], 5));

//picking number

function pickingNumbers(a) {
  const A = a.sort((a, b) => a - b);
  let start = 0,
    streak = 0,
    longestStreak = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i] - A[start] <= 1) {
      streak++;
    } else {
      if (streak > longestStreak) {
        longestStreak = streak;
      }
      streak = 0;
      start = i;
    }
  }
  if (streak > longestStreak) {
    longestStreak = streak;
  }
  return longestStreak + 1;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

// climbing Leader Board
function climbingLeaderboard(scores, alice) {
  //   let rankArr = [],
  //     rank = 1,
  //     j = 0,
  //     ranked = [];
  // let newArr = scores.concat(alice).sort((a,b)=> b-a)
  //     console.log(newArr);
  // for(let i=0; i<newArr.length; i++) {
  //     if(newArr[i] == newArr[i+1]) {
  //         rankArr.push(rank)
  //     } else {
  //         rankArr.push(rank)
  //         rank++;
  //     }
  //     console.log(rankArr);
  //     console.log(newArr);
  //     console.log(alice);
  // }
  // for(let z=0; z<alice.length; z++) {
  //     for(let i=0; i<newArr.length; i++) {
  //         console.log(z,i);
  //         if(alice[z] == newArr[i]) {
  //             console.log(i);
  //             ranked.push(rankArr[i])
  //         }
  //     }
  // }
  //   let newArr = scores.sort((a, b) => b - a);
  //   console.log(newArr);
  //   for (i = 0; i < newArr.length; i++) {
  //     if (newArr[i] == newArr[i + 1]) {
  //       rankArr.push(rank);
  //     } else {
  //       rankArr.push(rank);
  //       rank++;
  //     }
  //   }
  //   for(let j=0; j<alice.length; j++)
  //   newArr.push(alice[j]);
  //   if(alice[j] == newArr[i]) {
  //       ranked.push(rankArr[i])
  //       console.log(j);
  //   }
  //   console.log(newArr);
  //   console.log(rankArr);
  //   console.log(j);
  //   return ;
  const results = Array(alice.length);
  console.log(results);
  let rank = 1;
  for (let i = 0, j = alice.length - 1; j >= 0; j--) {
    for (; scores[i] > alice[j]; i++) {
      if (scores[i] > scores[i + 1] || i === scores.length - 1) rank++;
    }
    results[j] = rank;
    console.log(j);
  }
  return results;

  //another solution
  // let positions = [];
  // let distScore = [...new Set(scores)];
  // let aliceIndex = 0;
  // let i = distScore.length - 1;
  // alice.forEach((element) => {
  //   while (i >= 0) {
  //     if (element >= distScore[i]) {
  //       i--;
  //     } else {
  //       positions.push(i + 2);
  //       break;
  //     }
  //   }
  //   if (i < 0) positions.push(1);
  // });

  // return positions;
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));
