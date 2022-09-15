function countAandB(input) {
  // your code here
  let countA = 0;
  let countB = 0;
  for (i = 0; i < input.length; i++) {
    if (input[i] == 'a') {
      countA += 1;
    } else if (input[i] == 'b') {
      countB += 1;
    }
  }
  total = countA + countB;
  message = `${total} (${countA} ‘a’ letters and ${countB} ‘b’ letter)`;
  return message;
}

function toNumber(input) {
  // your code here
  //input2 = ['e', 'd', 'c', 'd', 'e'];
  arr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  newArr = [];
  for (i = 0; i < input.length; i++) {
    newArr.push(arr.indexOf(`${input[i]}`) + 1);
  }
  return newArr;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
