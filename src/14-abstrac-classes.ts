{
  // Remove potential error prom behaviour

  abstract class CapacitySizes {
    constructor(public capacities: string[]) {}

    get available() {
      return this.capacities;
    }

    set available(capacities: string[]) {
      this.capacities = capacities;
    }
  }

  // We can't do this any more
  // const sizes = new CapacitySizes(['']);
}
