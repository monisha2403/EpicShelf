import Page from "../components/Page";
import "./BooksPage.css";

function BooksPage() {
    const books = [
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
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            image: "https://example.com/1984.jpg"
        }
        // Add more books as needed
    ];

    return (
        <Page>
            <div className="books-page">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={book.image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        </Page>
    );
}

export default BooksPage;