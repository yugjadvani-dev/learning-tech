import axios from "axios";
import auth from "./auth";

const addToCart = () => {
    const { user: users } = auth();
    const handleSubmit = async (record: any) => {
        console.log("record", record);
        try {
            const response = await axios.post('http://localhost:7777/api/cart/add', {
                name: record.name,
                price: record.price,
                quantity: 1,
                imageUrl: record.img,  // Pass the image URL here
                userId: users._id,
            });

            if (response.status === 201) {
                alert('Item added to cart successfully');
            } else {
                alert('Failed to add item');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error occurred while adding item to cart');
        }
    };

    return { handleSubmit };
};

export default addToCart;