import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="bg-gray-100/50 text-black dark:bg-gray-900 dark:text-white">
        <Hero />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default App;
