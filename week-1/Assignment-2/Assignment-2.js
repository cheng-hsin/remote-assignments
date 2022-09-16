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
  newArr = [];
  for (i = 0; i < input.length; i++) {
    // newArr.push(arr.indexOf(`${input[i]}`) + 1);
    newArr.push(`${input[i]}`.charCodeAt(0) - 96);
  }
  return newArr;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
