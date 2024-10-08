const express = require('express');
const CartItem = require('../models/cartItem');
const router = express.Router();

// POST /api/cart/add
router.post('/add', async (req, res) => {
    try {
        const { name, price, quantity, imageUrl, userId } = req.body;

        if (!imageUrl) {
            return res.status(400).json({ message: 'Image URL is required' });
        }

        // Create new cart item
        const cartItem = new CartItem({
            name,
            price,
            quantity: quantity || 1,  // Default to 1 if quantity is not provided
            imageUrl,  // Store the image URL
            userId,
        });

        // Save cart item to the database
        await cartItem.save();

        res.status(201).json({ message: 'Item added to cart successfully', cartItem });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const cartItems = await CartItem.find(); // Optionally filter by userId
        res.status(200).json({ cartItems });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Find the cart item by ID and delete it
        const deletedCartItem = await CartItem.findByIdAndDelete(id);

        if (!deletedCartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.status(200).json({ message: 'Cart item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
