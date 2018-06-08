{
  // Imagine we have a dom element
  // setter element.className = '';
  // getter element.className;

  // Class with getter and setter example - CapacitySizes

  // Example function
  class UsbFlashDrive {
    public capacity: string[] = [];

    constructor(readonly brand: string) {}

    public addCapacity(capacity: string) {
      this.capacity.push(capacity);
    }

    set available(isAvailable: boolean) {
      this.available = isAvailable;
    }

    get available(): boolean {
      return this.available;
    }
  }
}
