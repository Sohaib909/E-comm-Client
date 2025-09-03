import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../features/cart/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image || "https://via.placeholder.com/100"}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        updateQuantity({ id: item._id, quantity: Number(e.target.value) })
                      )
                    }
                    className="w-16 border rounded p-1 mt-2"
                  />
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item._id))}
                className="text-red-500 font-bold hover:underline"
              >
                ❌ Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4 mt-4">
            <h2 className="text-xl font-bold">
              Total ({totalQuantity} items): ${totalPrice}
            </h2>
            <div className="space-x-4">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Clear Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
