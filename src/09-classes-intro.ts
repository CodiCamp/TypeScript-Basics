{
  // Example function in the JS world
  function FlashDrive1(brand: string) {
    this.brand = brand;
    this.capacity = [];
  }

  // Class example
  class FlashDrive {
    brand: string;
    capacity: string[] = [];
    constructor(brand: string) {
      this.brand = brand;
    }
    getBrand(): string {
      return this.brand;
    }
    addCapacity(cap: string): void {
      this.capacity.push(cap);
    }
  }
  const kingstonFlashDrive = new FlashDrive('Kingston');
  kingstonFlashDrive.addCapacity('32GB');
  // console.log(kingstonFlashDrive);
}
