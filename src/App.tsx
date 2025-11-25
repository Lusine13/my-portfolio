import Navbar from "./components/Navbar";
import Hero from "./components/Hero/";
import CV from "./components/CV/";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <CV />
      <Projects />
    </div>
  );
}

export default App;
