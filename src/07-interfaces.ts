{
  // Start
  type FlashDrive1 = {
    brand: string;
    sizes: number[];
    getBrand: () => string;
  };

  interface SisezInterface {
    sizes: number[];
  }
  interface FlashDrive extends SisezInterface {
    brand: string;
    getBrand(): string;
    [key: number]: string;
  }
  let myUsbFlashDrives: FlashDrive;
  function creteFlashDrive(brand: string, sizes: number[]) {
    return {
      brand,
      sizes,
      getBrand() {
        return brand;
      },
    };
  }
  let flasDrive: FlashDrive = {
    brand: 'test',
    sizes: [1, 2, 3],
    getBrand() {
      return this.brand;
    },
  };
  myUsbFlashDrives = creteFlashDrive('Kingston', [8, 16, 32]);
  myUsbFlashDrives[1] = '';
  // Extend
  // Indexed props
}
