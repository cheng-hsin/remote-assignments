function count(input) {
  // your code here
  var storageArr = input;

  var letter;
  var message = '';
  while (input.length > 0) {
    var count = 0;
    letter = storageArr[0];
    for (var i = 0; i < storageArr.length; i++) {
      if (letter === storageArr[i]) {
        count++;
        storageArr.splice(i, 1);
        i--;
      }
    }
    //console.log(storageArr);
    if (storageArr.length > 0) {
      message += `${letter}:${count}, `;
    } else if (storageArr.length == 0) {
      message += `${letter}:${count}`;
    }
  }
  return `{${message}}`;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  var storageArr = input;
  var letter;
  var output = [];
  while (input.length > 0) {
    var count = 0;
    letter = storageArr[0].key;
    for (var i = 0; i < storageArr.length; i++) {
      if (letter === storageArr[i].key) {
        count += storageArr[i].value;
        storageArr.splice(i, 1);
        i--;
      }
    }
    output.push({ key: letter, value: count });
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
