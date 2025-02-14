import { useNavigate } from "react-router-dom";
import Page from "../components/Page";
import "./Cart.css";

function Cart() {
    const navigate = useNavigate();

    const cartItems = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: 10.99,
            quantity: 1
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: 8.99,
            quantity: 2
        }
        // Add more cart items as needed
    ];

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        navigate("/checkout");
    };

    return (
        <Page>
            <div className="cart-page">
                <h1>Shopping Cart</h1>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.title}</h3>
                            <p>by {item.author}</p>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <h2>Total: ${total.toFixed(2)}</h2>
                    <button onClick={handleCheckout}>Proceed to Checkout</button>
                </div>
            </div>
        </Page>
    );
}

export default Cart;