interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Wirecard {
  paymentId: string;
}

interface PayPal {
  email: string;
}

// 1. Create intersection types
type CheckoutCard = Order & Wirecard;
type CheckoutPayPal = Order & PayPal;

const order: Order = {
  id: 'someGenericId',
  amount: 666,
  currency: 'BGN',
};

const orderCard: CheckoutCard = {
  ...order,
  paymentId: 'someWireCardGeneratedPaymentId',
};

const orderPayPal: CheckoutPayPal = {
  ...order,
  email: 'test@test.me',
};

// Checkout functionality should deffer between different checkout types
// 3. Create a Union type from the 2 order types
type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
  // Detect different type of order by using discriminating union type
  // Use type guards
}
