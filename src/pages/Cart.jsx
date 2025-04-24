const mockCartItems = [
  {
    id: 1,
    name: "Fresh Mangoes",
    price: 4.99,
    quantity: 2,
    image: "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFQRDNEUmJVYUwuX1NMMTUwMF8uanBn.jpg",
  },
  {
    id: 2,
    name: "Green Apples",
    price: 3.49,
    quantity: 3,
    image: "https://freshleafuae.com/wp-content/uploads/2024/08/green-apple-freshleaf-dubai-uae-img04.jpg",
  },
];

const Cart = () => {
  const cartItems = mockCartItems; // Replace with real cart state when ready

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <p className="text-gray-600 mb-6">
        Here are the items you've added. Ready to check out?
      </p>

      {cartItems.length === 0 ? (
        <div className="p-4 border border-dashed border-gray-400 text-center text-gray-500">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center pt-6 border-t mt-6">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-2xl font-bold text-primary">
              ${total.toFixed(2)}
            </span>
          </div>

          <button className="mt-6 w-full md:w-auto bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
