import { useParams } from "react-router-dom";
import Page from "../components/Page";
import "./CategoriesPage.css";

function CategoriesPage() {
  const { category } = useParams();
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://example.com/great-gatsby.jpg",
      category: "classic"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://example.com/to-kill-a-mockingbird.jpg",
      category: "classic"
    },
    {
      id: 3,
      title: "Dracula",
      author: "Bram Stoker",
      image: "https://example.com/dracula.jpg",
      category: "horror"
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://example.com/pride-and-prejudice.jpg",
      category: "romantic"
    }
    // Add more books as needed
  ];

  const filteredBooks = books.filter(book => book.category === category);

  return (
    <Page>
      <div className="categories-page">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Books</h1>
        <div className="book-list">
          {filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default CategoriesPage;