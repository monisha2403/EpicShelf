import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import BookDetailsPage from "./pages/BookDetailsPage";

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const NAVBAR_ITEMS = [
    { icon: "🏠", text: "Home", component: <HomePage /> },
    { icon: "ℹ️", text: "About", component: <AboutPage /> },
    { icon: "🔍", text: "Search", component: <SearchPage /> },
    { icon: "👤", text: "Profile", component: <ProfilePage /> },
    { icon: "📖", text: "Book", component: <BookDetailsPage /> }, // Added BookDetailsPage
  ];

  return (
    <Router>
      <div className="app">
        <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/book" element={<BookDetailsPage />} /> {/* Updated path */}
            <Route path="/book/:id" element={<BookDetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;