import Page from "../components/Page";
import "./BookDetailsPage.css";

function BookDetailsPage() {
    const book = {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
        image: "https://example.com/great-gatsby.jpg"
    };

    return (
        <Page>
            <div className="book-details">
                <h1>{book.title}</h1>
                <h2>by {book.author}</h2>
                <img src={book.image} alt={book.title} />
                <p>{book.description}</p>
            </div>
        </Page>
    );
}

export default BookDetailsPage;