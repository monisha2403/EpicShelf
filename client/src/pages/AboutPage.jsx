import Page from "../components/Page";
import "./AboutPage.css";

function AboutPage() {
  return (
    <Page>
      <div className="about-page">
        <h1>About EpicShelf</h1>
        <p>
          Welcome to EpicShelf, your number one source for all things books. We're dedicated to giving you the very best of literature, with a focus on variety, quality, and customer service.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded in 2025 by a group of book enthusiasts, EpicShelf has come a long way from its beginnings. When we first started out, our passion for books drove us to do tons of research so that EpicShelf can offer you the world's most popular and trending books. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a seamless and personalized shopping experience for book lovers. We aim to offer a wide range of books across various genres, including trending, classic, action, horror, and kids' books. We believe in the power of reading and strive to make books accessible to everyone.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide selection of books</li>
          <li>Personalized recommendations</li>
          <li>Secure payment options</li>
          <li>Excellent customer service</li>
        </ul>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p>Sincerely,</p>
        <p>The EpicShelf Team</p>
      </div>
    </Page>
  );
}

export default AboutPage;