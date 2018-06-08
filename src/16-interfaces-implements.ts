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

  interface UsbFlashDriveInetrface {
    capacity: string[];
  }

  class UsbFlashDrive extends CapacitySizes implements UsbFlashDriveInetrface {
    capacity: string[] = [];

    constructor(readonly brand: string, capacities: string[]) {
      super(capacities);
    }

    public updateCapacities(capacitiesStrArr: string[]) {
      this.capacities = capacitiesStrArr;
    }

    public addCapacity(strVar: string) {
      this.capacities.push(strVar);
    }
  }
}
