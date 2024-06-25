import AboutMe from "./ComponentsAnimated/AboutMe";
import Footer from "./ComponentsAnimated/Footer";
import Hero from "./ComponentsAnimated/Hero";
import Nav from "./Components/Nav";
import Projects from "./ComponentsAnimated/Projects";
import Skills from "./ComponentsAnimated/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="bg-gray-100/50 text-black dark:bg-gray-900 dark:text-white">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
