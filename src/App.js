import About from "./components/About.js";
import { Experience } from "./components/Experience.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Portfolio from "./components/Portfolio.js";
import SocialLinks from "./components/SocialLinks.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <SocialLinks/>
    </div>
  );
}

export default App;
