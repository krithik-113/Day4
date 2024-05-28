//a. Print odd numbers in an array
var odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumber = (function () {
  var oddy = [];
  for (var i = 0; i < odd.length; i++) {
    if (odd[i] % 2 !== 0) {
      oddy.push(odd[i]);
    }
  }
  return oddy;
})();

//b. Convert all the strings to title caps in a string array
var names = ["krithik", "roshan"];
var titleCaps = (function () {
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
  }
  return names.join(" ");
})();

//c. Sum of all numbers in an array
var sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumOfNumbers = (function () {
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total += sum[i];
  }
  return total;
})();

//d. Return all the prime numbers in an array
var prime = [1, 2, 3, 4, 5, 6, 7];
var isPrime = function (num) {
  var count = 0;
  if (num < 1) {
    return false;
  }
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2 || count == 1) {
    return true;
  }
  return false;
};
var primeNumbers = (function () {
  var arr = [];
  prime.map(function (number) {
    if (isPrime(number)) {
      arr.push(number);
    }
  });
  return arr;
})();

//e. Return all the palindromes in an array
var palindrome = ["madam", "malayalam"];
var isPalin = function (str) {
  var strcpy = "";
  for (i = str.length - 1; i >= 0; i--) {
    strcpy += str[i];
  }
  return strcpy;
};
var palinArr = (function () {
  var reverse = [];
  palindrome.filter(function (element) {
    reverse.push(isPalin(element));
  });
  return reverse;
})();

//f. Return median of two sorted arrays of the same size.
var a = [3, 2, 1, 4, 6, 5];
var b = [7, 8, 10, 9, 12, 11];
var median = (function () {
  var merged = [...a, ...b].sort(function (a, b) {
    a - b;
  });
  let median = (a[a.length / 2] + b[b.length / 2]) / 2;
  return Math.trunc(median);
})();

//g. Remove duplicates from an array
var duplicates = [10, 20, 20, 30, 40, 40];
var duplicateArr = (function () {
  let unique = duplicates.filter(function (element, index) {
    return duplicates.indexOf(element) == index;
  });
  return unique;
})();

//h. Rotate an array by k times
var rotate = [1, 2, 3, 4, 5];
var rotatedK = (function () {
  let k = 3;
  let rotated = rotate.slice(k).concat(rotate.slice(0, k));
  return rotated;
})();

//--------------------------------------------All Output's----------------------------------------------

//a
console.log(oddNumber);

//b
console.log(titleCaps);

//c
console.log(sumOfNumbers);

//d
console.log(primeNumbers);

//e
console.log(palinArr);

//f
console.log(median);

//g
console.log(duplicateArr);

//h
console.log(rotatedK);
