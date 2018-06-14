// What is instanceof operator doing
// Checks the prototype
// Object.getPrototypeOf(dev1) === Developer

class Developer {
  constructor(public name: string) {}
}

class Team {
  constructor(public title: string, public developers: Developer[]) {}
}

function getNameFromObject(payload: Developer | Team) {}
