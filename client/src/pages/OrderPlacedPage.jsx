import Page from "../components/Page";
import "./OrderPlacedPage.css";

function OrderPlacedPage() {
    return (
        <Page>
            <div className="order-placed-page">
                <h1>Order Placed</h1>
                <p>Thank you for your purchase! Your order has been placed successfully.</p>
                <p>Order Summary:</p>
                <ul>
                    <li>The Great Gatsby - 1 x $10.99</li>
                    <li>To Kill a Mockingbird - 2 x $8.99</li>
                </ul>
                <p>Total: $28.97</p>
            </div>
        </Page>
    );
}

export default OrderPlacedPage;