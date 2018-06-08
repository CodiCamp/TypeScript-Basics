{
  // inheritance Example
  class CapacitySizes {
    constructor(public capacities: string[]) {}
    get available() {
      return this.capacities;
    }
    set available(capacities: string[]) {
      this.capacities = capacities;
    }
  }

  class UsbFlashDrive extends CapacitySizes {
    public capacity: string[] = [];
    constructor(readonly brand: string, capacity: string[]) {
      super(capacity);
    }
    public addCapacity(capacity: string) {
      this.capacity.push(capacity);
    }
  }

  const myDrive = new UsbFlashDrive('Kinston', ['32GB', '64GB']);
  console.log(myDrive);
}
