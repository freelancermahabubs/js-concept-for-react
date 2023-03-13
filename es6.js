const numbers = [1, 2, 5, 8, 9];

const student = {
  id: 28, name: 'jibon', age: 21,
  movies: ['king khan', 'Dhakar Mastan']
};
const {name, id, age, movies} = student
const about = `My Name is ${name}, age of ${age} has number ${numbers[2]} her movies is ${movies[0]}`
console.log(about);
