//a. Print odd numbers in an array
var odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumber = () => {
  var oddy = [];
  for (var i = 0; i < odd.length; i++) {
    if (odd[i] % 2 !== 0) {
      oddy.push(odd[i]);
    }
  }
  return oddy;
};

//b. Convert all the strings to title caps in a string array
var names = ["krithik", "roshan"];
var titleCaps = () => {
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
  }
  return names.join(" ");
};

// //c. Sum of all numbers in an array
var sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumOfNumbers = () => {
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total += sum[i];
  }
  return total;
};

//d. Return all the prime numbers in an array
var prime = [1, 2, 3, 4, 5, 6, 7];
var isPrime = (num) => {
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
var primeNumbers = () => {
  var arr = [];
  prime.map((number) => {
    if (isPrime(number)) {
      arr.push(number);
    }
  });
  return arr;
};

// //e. Return all the palindromes in an array
var palindrome = ["madam", "malayalam"];
var isPalin = (str) => {
  var strcpy = "";
  for (i = str.length - 1; i >= 0; i--) {
    strcpy += str[i];
  }
  return strcpy;
};
var palinArr = () => {
  var reverse = [];
  palindrome.filter((element) => {
    reverse.push(isPalin(element));
  });
  return reverse;
};

//--------------------------------------------All Output's----------------------------------------------

//a
console.log(oddNumber());

//b
console.log(titleCaps());

//c
console.log(sumOfNumbers());

//d
console.log(primeNumbers());

//e
console.log(palinArr());
