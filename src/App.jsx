import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};
export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/chooseLanguage",
  //   element: <Choose />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default App;
