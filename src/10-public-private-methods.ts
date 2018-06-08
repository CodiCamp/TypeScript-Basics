{
  // Example function
  class UsbFlashDrive {
    public capacity: string[] = [];
    private brand: string;
    constructor(brand: string) {}
    public addCapacity(capacity: string) {
      this.capacity.push(capacity);
    }
  }
  const samsungFlashDrive = new UsbFlashDrive('Kingston');
  // samsungFlashDrive.addCapacity('32GB');
  console.log(samsungFlashDrive);
}
