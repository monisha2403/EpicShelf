import Page from "../components/Page";
import "./BookDetailsPage.css";

function BookDetailsPage() {
    const books = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
            image: "https://example.com/great-gatsby.jpg"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature.",
            image: "https://example.com/to-kill-a-mockingbird.jpg"
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            description: "1984, a novel by George Orwell, offers an unsettling portrayal of a dystopian future where totalitarianism reigns supreme, and individualism is crushed under the weight of oppressive surveillance and control.",
            image: "https://example.com/1984.jpg"
        }
        // Add more books as needed
    ];

    return (
        <Page>
            <div className="book-details-page">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={book.image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                        <p>{book.description}</p>
                    </div>
                ))}
            </div>
        </Page>
    );
}

export default BookDetailsPage;