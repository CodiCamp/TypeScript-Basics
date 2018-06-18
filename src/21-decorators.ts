/**
 * link: http://www.typescriptlang.org/docs/handbook/decorators.html
 *
 * A Decorator is a special kind of declaration that can be attached to
 * a class declaration, method, accessor, property, or parameter.
 * Decorators use the form @expression, where expression must evaluate to
 * a function that will be called at runtime with information about the
 * decorated declaration.
 */

function f() {
  console.log('f(): evaluated');
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('f(): called');
  };
}

function g() {
  console.log('g(): evaluated');
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('g(): called');
  };
}

class C {
  @f()
  @g()
  method() {}
}

/**
 * Class decorator
 * @param constructor
 */
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

/***
 * Method Decorators
 */
const log = (
  target: Object,
  key: string | symbol,
  descriptor: TypedPropertyDescriptor<Function>,
) => {
  return {
    value: function(...args: any[]) {
      console.log('Arguments: ', args.join(', '));
      const result = descriptor.value.apply(target, args);
      console.log('Result: ', result);
      return result;
    },
  };
};

class Calculator {
  @log
  add(x: number, y: number) {
    return x + y;
  }
}

new Calculator().add(1, 3);

/***
 * Property Decorators
 */
{
  const log = (target: Object, key: string | symbol) => {
    let value = target[key];

    const getter = () => {
      console.log('Getting value: ', value);
      return value;
    };
    const setter = (val) => {
      console.log('Setting value: ', val);
      value = val;
    };

    // Reflect.deleteMetadata(key, target);
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };

  class Box<T> {
    @log item: T;
  }

  const numberInABox = new Box<number>();
  numberInABox.item = 12;
  numberInABox.item;

  console.log(numberInABox);
}
