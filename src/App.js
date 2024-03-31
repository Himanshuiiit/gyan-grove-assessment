import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Recommendation from "./components/Recommendation";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Recommendation />
      <UpcomingEvents />
    </div>
  );
}

export default App;
