{
  const date = new Date();
  //call instance method
  date.getFullYear();

  //Static methods
  const now = Date.now();

  // How about classes
  class BusTicket {
    static allowedCities = ['Plovdiv', 'Burgas', 'Sofia'];
    static issue(price: number) {
      return `Bus ticket price is ${price} leva`;
    }
  }

  const allowedCities = BusTicket.allowedCities;
  console.log(allowedCities);
  console.log(BusTicket.issue(16));
}
