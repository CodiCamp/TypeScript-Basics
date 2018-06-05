//Arrow functions

// function sumThis(a, b) {
//   return a + b;
// }

// let sumThat = function(a, b) {
//   return a + b;
// };

// const sumAll = (a) => a.toString();

//Default function parameters

// function configure (config1 = {}, config2 = {}) {
// }

// Object literal improvements
// const path = './dist';
// const filename = 'app.js';

// const getFullPath = function() {
//   console.log(this);
//   return this.path + this.filename;
// };

// const config = { path, filename, getFullPath };

// console.log(config.getFullPath());

// Rest and spread

// function sumAll(message, ...arr) {
//   console.log(message);
//   return arr.reduce((prev, next) => {
//     return prev + next;
//   });
// }

// console.log(sumAll('message hello', 1, 2, 4, 5, 6));

// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// Destruction of Objects and Arrays

// const getFullPath = function() {
//   console.log(this);
//   return this.path + this.filename;
// };

// const config = { path: './dist', filename: 'app.js' };

// let { path, filename } = config;

// function destrict({ path, filename }) {
//   return path + filename;
// }

// destrict(config);

// const arr1 = [1, 2, 4, 5];
// let [first, second] = arr1;

// Specialt types
// 1. ANY

// let anyVar: any;

// 2 Void
// let config = { path: './dist' };

// function modifyConfig(): void {
//   config.path = './build';
// }
