import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"

const App = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;

