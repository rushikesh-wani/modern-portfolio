import AboutMe from "./ComponentsAnimated/AboutMe";
import Footer from "./Components/Footer";
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
              <div className="py-16 bg-gray-100/50 text-black dark:bg-gray-900 dark:text-white">
                <AboutMe />
              </div>
              <Footer />
            </>
          ),
        },
        {
          path: "skills",
          element: (
            <>
              <Nav />
              <div className="py-8 bg-gray-100/50 text-black dark:bg-gray-900 dark:text-white">
                <Skills />
              </div>
              <Footer />
            </>
          ),
        },
        {
          path: "projects",
          element: (
            <>
              <Nav />
              <div className="pt-16 bg-gray-100/50 text-black dark:bg-gray-900 dark:text-white">
                <Projects />
              </div>
              <Footer />
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
