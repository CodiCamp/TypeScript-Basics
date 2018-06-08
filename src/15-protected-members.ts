{
  abstract class CapacitySizes {
    // make property protected so we access in child classes via extend
    constructor(protected capacities: string[]) {}

    get available() {
      return this.capacities;
    }

    set available(capacities: string[]) {
      this.capacities = capacities;
    }
  }

  class UsbFlashDrive extends CapacitySizes {
    public capacity: string[] = [];

    constructor(readonly brand: string, capacities: string[]) {
      super(capacities);
    }

    public updateCapacities(capacities: string[]) {
      // No access if variable is private on parent class
      this.capacities = capacities;
    }

    public addCapacity(capacity: string) {
      this.capacities.push(capacity);
    }
  }
}
