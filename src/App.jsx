import { useState, useEffect } from "react";

import ControlPanel from "./components/ControlPanel";
import Home from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ThemeIcon from "./icons/Theme";

// IMPORTANT NOTES: FAVICON, SEO, ACCESSIBILITY, LIGHTHOUSE etc...
// ALSO: BRANCH OFF TO A HIDDEN COMPONENT AND EITHER LOG OR DISPLAY A VISITOR COUNTER!

// ONCE ALL PAGES ARE COMPLETE, TRY AND FIND WHERE TO PLACE MIN-H-SCREEN SO IT STAYS COMPACT!
// ALSO LOOK INTO ASP.NET WEB APP TEMPLATES FOR GUIDANCE

// MAYBE USE MY PHOTO FOR FAVICON?

const App = () => {
  const [activePage, setActivePage] = useState("home");

  // Auto scrolls to the top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  // Auto manages dark mode based on user's or system settings
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Switches between light and dark modes
  const toggleMode = () => {
    if (!localStorage.theme || localStorage.theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <header>
        <button
          aria-label="Light-dark theme switch"
          className="theme-button"
          onClick={toggleMode}
        >
          <ThemeIcon className="theme-icon" />
        </button>
      </header>
      <main className="container mx-auto mb-20 sm:mb-4 px-2 sm:px-4">
        <section
          className={`${activePage === "home" ? "opacity-100" : "hidden"}`}
        >
          <div className="mb-10">
            <h1 className="first-name">Alex</h1>
            <h1 className="last-name">Arobelidze</h1>
          </div>
          <div className="page-content">
            <Home />
          </div>
        </section>
        <section
          className={`${activePage === "about" ? "opacity-100" : "hidden"}`}
        >
          <div className="mb-10">
            <h1 className="page-title">About</h1>
          </div>
          <div className="mb-10 page-content">
            <About />
          </div>
        </section>
        <section
          className={`${activePage === "portfolio" ? "opacity-100" : "hidden"}`}
        >
          <div className="mb-10">
            <h1 className="page-title">Portfolio</h1>
          </div>
          <div className="mb-10 page-content">
            <Portfolio />
          </div>
        </section>
        <section
          className={`${activePage === "articles" ? "opacity-100" : "hidden"}`}
        >
          <div className="mb-10">
            <h1 className="page-title">Articles</h1>
          </div>
          <div className="mb-10 page-content">
            <Articles />
          </div>
        </section>
        <section
          className={`${activePage === "contact" ? "opacity-100" : "hidden"}`}
        >
          <div className="mb-10">
            <h1 className="first-name">Let's</h1>
            <h1 className="last-name">talk</h1>
          </div>
          <div className="mb-10 page-content">
            <Contact />
          </div>
        </section>
        <ControlPanel
          className="control-panel-laptop"
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </main>
      <footer>
        <ControlPanel
          className="control-panel-mobile"
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </footer>
    </div>
  );
};

export default App;
