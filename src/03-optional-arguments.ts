{
  function mulAB(a: number, b?: number): number {
    if (b) {
      return a * b;
    } else {
      return a;
    }
  }

  mulAB(5);
}
