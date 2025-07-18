/** @format */

import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    (
      <div>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
    ),
    (
      <div>
        <WelcomeMessage />
      </div>
    ),
    (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  );
}

export default App;
