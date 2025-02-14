import Page from "../components/Page";
import "./Checkout.css";

function Checkout() {
    return (
        <Page>
            <div className="checkout-page">
                <h1>Checkout</h1>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Credit Card Number</label>
                        <input type="text" required />
                    </div>
                    <button type="submit">Place Order</button>
                </form>
            </div>
        </Page>
    );
}

export default Checkout;