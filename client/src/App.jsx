import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BooksPage from "./pages/BooksPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Wishlist from "./pages/Wishlist";
import OrderPlacedPage from "./pages/OrderPlacedPage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const NAVBAR_ITEMS = [
    { icon: "🏠", text: "Home", path: "/" },
    { icon: "ℹ️", text: "About", path: "/about" },
    { icon: "👤", text: "Profile", path: "/profile" },
    { icon: "📚", text: "Books", path: "/books" },
    { icon: "🛒", text: "Cart", path: "/cart" },
    { icon: "❤️", text: "Wishlist", path: "/wishlist" },
  ];

  return (
    <Router>
      <div className="app">
        <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/order-placed" element={<OrderPlacedPage />} />
            <Route path="/categories/:category" element={<CategoriesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;