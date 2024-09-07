import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="overflow-x-auto">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
    </div>
  )
};

export default App;

