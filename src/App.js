import AboutMe from "./ComponentsAnimated/AboutMe";
import Footer from "./Components/Footer";
import Hero from "./ComponentsAnimated/Hero";
import Nav from "./Components/Nav";
import Projects from "./ComponentsAnimated/Projects";
import Skills from "./ComponentsAnimated/Skills";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about-me",
          element: (
            <>
              <Nav />
              <div className="pt-10">
                <AboutMe />
              </div>
            </>
          ),
        },
        {
          path: "skills",
          element: (
            <>
              <Nav />
              <div className="pt-6">
                <Skills />
              </div>
            </>
          ),
        },
        {
          path: "projects",
          element: (
            <>
              <Nav />
              <div className="pt-16">
                <Projects />
              </div>
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
