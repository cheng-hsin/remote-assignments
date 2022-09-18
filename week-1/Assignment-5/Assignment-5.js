function count(input) {
  // your code here
  const output = {};
  for (let i = 0; i < input.length; i++) {
    if (Object.keys(output).includes(input[i]) == true) {
      output[input[i]] += 1;
      // console.log(`${input[i]} is in output, so add 1 to it -->`, output);
    } else {
      output[input[i]] = 1;
      // console.log(`${input[i]} is not in output, so add it -->`, output);
    }
  }
  return output;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  const output = {};
  for (let i = 0; i < input.length; i++) {
    if (Object.keys(output).includes(input[i].key) == true) {
      output[input[i].key] += input[i].value;
      // console.log(
      //   `${input[i].key} is in output, so add its value to it -->`,
      //   output
      // );
    } else {
      output[input[i].key] = input[i].value;
      // console.log(
      //   `${input[i].key} is not in output, so add it and its value -->`,
      //   output
      // );
    }
  }
  return output;
}

let input2 = [
  { key: 'a', value: 3 },
  { key: 'b', value: 1 },
  { key: 'c', value: 2 },
  { key: 'a', value: 3 },
  { key: 'c', value: 5 },
];
console.log(groupByKey(input2));
