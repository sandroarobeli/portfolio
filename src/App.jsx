import { useState, useEffect } from "react";

import HtmlIcon from "./icons/Html";
import CssIcon from "./icons/Css";
import JsIcon from "./icons/Js";
import ReactIcon from "./icons/React";
import ReduxIcon from "./icons/Redux";
import NodeIcon from "./icons/Node";
import TailwindIcon from "./icons/Tailwind";
import MuiIcon from "./icons/Mui";
import CsharpIcon from "./icons/Csharp";
import MongoIcon from "./icons/Mongo";
import SqlIcon from "./icons/Sql";
import GitIcon from "./icons/Git";
import ThemeIcon from "./icons/Theme";
import ControlPanel from "./components/ControlPanel";

// IMPORTANT NOTES: FAVICON, SEO, ACCESSIBILITY, LIGHTHOUSE etc...
// ALSO: BRANCH OFF TO A HIDDEN COMPONENT AND EITHER LOG OR DISPLAY A VISITOR COUNTER!
// DO THE LAZY LOADING AT THE VERY END AFTER EXTRACTING CUSTOM COMPONENTS

// ONCE ALL PAGES ARE COMPLETE, TRY AND FIND WHERE TO PLACE MIN-H-SCREEN SO IT STAYS COMPACT!

// TEMPLATE FOR FINAL VIEW: <section><CustomElement /></section>

const App = () => {
  const [activePage, setActivePage] = useState("home");

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
      <main className="container min-h-screen mx-auto mb-20 sm:mb-4 px-2 sm:px-4">
        <section
          className={`${activePage === "home" ? "opacity-100" : "hidden"}`}
        >
          <div className="mb-10">
            <h1 className="first-name">Alex</h1>
            <h1 className="last-name">Arobelidze</h1>
          </div>
          <div className="page-content">
            <p className="mb-3">
              Dedicated to developing well functioning web applications.
            </p>
            <p>
              Passionate about solving business problems through human-centered
              approach.
            </p>
          </div>
        </section>

        <section
          className={`${activePage === "about" ? "opacity-100" : "hidden"}`}
        >
          <div className="mb-10">
            <h1 className="page-title">About</h1>
          </div>
          <div className="mb-10 page-content">
            <p className="mb-3">
              I am a web developer based in the United States. I focus on
              listening to you, the client, transforming your business needs
              into seamlessly functioning applications to help you grow and
              prosper.
            </p>
            <p className="mb-3">
              I develop user interface for customer interaction as well as the
              server code that works behind the curtain to make such interaction
              possible.
            </p>
            <p>
              I enjoy meeting new people and building long lasting, successful
              relationships.
            </p>
            <p>Below are some of the tools I use in my work.</p>
          </div>
          <div className="icons-container">
            <HtmlIcon className="skill-icon" />
            <CssIcon className="skill-icon" />
            <JsIcon className="skill-icon" />
            <ReactIcon className="skill-icon" />
            <ReduxIcon className="skill-icon" />
            <NodeIcon className="skill-icon" />
            <CsharpIcon className="skill-icon" />
            <TailwindIcon className="skill-icon" />
            <MuiIcon className="skill-icon" />
            <MongoIcon className="skill-icon" />
            <SqlIcon className="skill-icon" />
            <GitIcon className="skill-icon" />
          </div>
        </section>

        <section
          className={`${activePage === "portfolio" ? "opacity-100" : "hidden"}`}
          style={{ border: "1px solid red" }}
        >
          PORTFOLIO SECTION
        </section>
        <section
          className={`${activePage === "articles" ? "opacity-100" : "hidden"}`}
          style={{ border: "1px solid red" }}
        >
          ARTICLES SECTION
        </section>
        <section
          className={`${activePage === "contact" ? "opacity-100" : "hidden"}`}
          style={{ border: "1px solid red" }}
        >
          CONTACT SECTION
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
