// Type queries
const developer = {
  name: 'Sam',
  xp: 10,
  test: {
    num1: 1,
    str1: '1',
  },
};

type DevType = typeof developer;

const newDeveloper: DevType = {
  name: 'Naka',
  xp: 10,
  test: {
    num1: 1,
    str1: '1',
  },
};

// Use typeof operator to create a new type of developer
// Keysof
