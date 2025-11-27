import Navbar from "./components/Navbar";
import Hero from "./components/Hero/";
import CV from "./components/CV/";
import Projects from "./components/Projects";
import Contact from "./components/Contact/";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <CV />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
