// Rest and spread

function sumAllNumbers(message: string, ...arr: number[]): number {
  console.log(message);

  return arr.reduce((prev, next) => {
    return prev + next;
  });
}

console.log(sumAllNumbers('message hello', 1, 2, 4, 5, 6));

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

const arr3 = [...arr1, ...arr2];

console.log(arr3);
