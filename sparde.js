const numbers = [45, 12, 54, 8];
const newNumbers = [...numbers];
numbers.push(54);
numbers.push(547);
newNumbers.push(5)


// create a new Array from an older array and add an Element
const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers)