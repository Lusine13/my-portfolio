import Navbar from "./components/Navbar";
import Hero from "./components/Hero/";
import CV from "./components/CV/";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <CV />
    </div>
  );
}

export default App;
