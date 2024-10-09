import React, { useEffect } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import './Cart.css'
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = React.useState([])
  console.log("cartItems",cartItems);

  useEffect(() => {
    // Fetch cart items from the backend
    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost:7777/api/cart');
            setCartItems(response.data.cartItems);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    fetchCartItems();
}, []);

const handleDelete = async (id) => {
  try {
      const response = await axios.delete(`http://localhost:7777/api/cart/${id}`);
      if (response.status === 200) {
          alert('Item deleted successfully');
          // Filter out the deleted item from the cart items list
          setCartItems(cartItems.filter(item => item._id !== id));
      }
  } catch (error) {
      console.error('Error deleting cart item:', error);
      alert('Error occurred while deleting item');
  }
};

  const updateQuantity = (id, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item._id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item._id !== id))
    handleDelete(id);
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.map((item,index) => (
        <div key={index} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center space-x-4">
            <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover" />
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-600">Price: ₹{item.price.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button variant="outline" size="icon" onClick={() => updateQuantity(item._id, item.quantity - 1)}>
              <Minus className="h-4 w-4" />
            </button>
            <input
              type="number"
              min="0"
              value={item.quantity}
              onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
              className="w-16 text-center"
            />
            <button variant="outline" size="icon" onClick={() => updateQuantity(item._id, item.quantity + 1)}>
              <Plus className="h-4 w-4" />
            </button>
            <button variant="destructive" size="icon" onClick={() => removeItem(item._id)}>
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
      <div className="mt-6 text-right">
        <p className="text-xl font-semibold">Total: ${total.toLocaleString()}</p>
        <button className="mt-4">Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart;