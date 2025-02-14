import Page from "../components/Page";
import "./Wishlist.css";

function Wishlist() {
    const wishlistItems = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            image: "https://example.com/great-gatsby.jpg"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            image: "https://example.com/to-kill-a-mockingbird.jpg"
        }
        // Add more wishlist items as needed
    ];

    return (
        <Page>
            <div className="wishlist-page">
                <h1>Wishlist</h1>
                <div className="wishlist-items">
                    {wishlistItems.map(item => (
                        <div key={item.id} className="wishlist-item">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>by {item.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    );
}

export default Wishlist;