//Solution to Question 1
function isAnArray(input) {
  return Array.isArray(input);
}

console.log(isAnArray("w3resource"));
console.log(isAnArray([1, 2, [4, 0]]));
console.log(isAnArray({ 2: "23" }));

//Solution to Question 2

function arrayClone(input) {
  /*Method 1*/

  // let copyArray;
  // copyArray=input;
  // return copyArray;

  /*Method 2*/
  let copy = [];
  for (i of input) {
    copy.push(i);
  }
  return copy;
}
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

//Solution to Question 3

function nthElement(input, n = 0) {
  if (n == 0) {
    return input[0];
  } else if (n < 0) {
    return [];
  } else {
    if (n > input.length) {
      return input;
    }
    let newArray = [];
    for (let i = 0; i < n; i++) {
      newArray.push(input[i]);
    }
    return newArray;
  }
}

console.log(nthElement([7, 9, 0, -2], 1));
console.log(nthElement([], 3));
console.log(nthElement([7, 9, 0, -2], 3));
console.log(nthElement([7, 9, 0, -2], 6));
console.log(nthElement([7, 9, 0, -2], -3));

//Solution to Question 4

const Joiner = (input) => {
  let newString = "";
  for (let i = 0; input.length - 1; i++) {
    newString += input[i] + ",";
  }
  newString += input[input.length - 1];
  return newString;
};

console.log(Joiner(["Red", "Green", "White", "Black"]));

function join(input) {
  //Alternatively input.join() could have been used
  let newString = "";
  for (let i = 0; i < input.length - 1; i++) {
    newString += input[i] + ",";
  }
  newString += input[input.length - 1];
  return newString;
}

console.log(join(["Red", "Green", "White", "Black"]));

//Solution to Question 5

function frequent(input) {
  let maximum = 0;
  let value = input[0];
  let hashmap = {};
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (hashmap[element]) {
      hashmap[element] += 1;
      if (hashmap[element] > maximum) {
        maximum = hashmap[element];
        value = element;
      }
    } else {
      hashmap[element] = 1;
      if (hashmap[element] > maximum) {
        maximum = hashmap[element];
        value = element;
      }
    }
  }
  console.log(hashmap);
  return value + " ( " + maximum + " times )";
}
console.log(frequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));