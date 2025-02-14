import Page from "../components/Page";
import "./HomePage.css";

function HomePage() {
  return (
    <Page>
      <div className="home-page">
        <div className="background-image"></div>
        <div className="content">
          <h1>Welcome to EpicShelf</h1>
          
          <h2>Explore now</h2>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;