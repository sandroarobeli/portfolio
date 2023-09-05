import { useState, useEffect } from "react";

import HomeIcon from "./icons/Home";
import UserIcon from "./icons/User";
import BriefcaseIcon from "./icons/Briefcase";
import NewspaperIcon from "./icons/Newspaper";
import EnvelopeIcon from "./icons/Envelope";
import Home from "./components/Home";
// IMPORTANT NOTES: FAVICON, SEO, ACCESSIBILITY, LIGHTHOUSE etc...
// ALSO: BRANCH OFF TO A HIDDEN COMPONENT AND EITHER LOG OR DISPLAY A VISITOR COUNTER!
// NEXT: READ ON FONT SIZING AND KEEP FILLING BASIC CONFIG SETTINGS AS THIS GUY GOES ON...
// TIMESTAMP: 1:05
// IN CASE I NEED TO CHANGE BUTTONS INTO DIVS, REFERENCE STARTS AT 22:00. (POINTER EVENTS ETC)

// HEADER START 49:20
// AT SOME POINT REFACTOR SECTIONS INTO SEPARATE COMPONENTS!!!
const App = () => {
  // TEMP START
  const [active, setActive] = useState({
    home: true,
    about: false,
    portfolio: false,
    articles: false,
    contact: false,
  });

  console.log("active 1: ", active); // test

  function switcher(section) {
    const copy = { ...active };
    Object.keys(copy).forEach((key) => {
      if (key === section) {
        copy[key] = true;
      } else {
        copy[key] = false;
      }
    });
    setActive(copy);
    console.log("active 2:", active); // test
  }

  // TEMP END

  useEffect(() => {
    // console.log("local storage theme 1: " + localStorage.theme);
    if (
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeMode = () => {
    if (!localStorage.theme || localStorage.theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
    // console.log("local storage theme 2: " + localStorage.theme);
  };

  return (
    <div className="main-content">
      <header className={`section section-1 ${active.home ? "active" : ""}`}>
        <Home />
      </header>
      <main className="">
        <section
          className={`section section-2 about ${active.about ? "active" : ""}`}
        >
          ABOUT SECTION
        </section>
        <section
          className={`section section-3 portfolio ${
            active.portfolio ? "active" : ""
          }`}
        >
          PORTFOLIO SECTION
        </section>
        <section
          className={`section section-4 articles ${
            active.articles ? "active" : ""
          }`}
        >
          ARTICLES SECTION
        </section>
        <section
          className={`section section-5 contact ${
            active.contact ? "active" : ""
          }`}
        >
          CONTACT SECTION
        </section>
      </main>
      <div className="controls">
        <button
          aria-label="light-dark mode switch"
          onClick={changeMode}
          className="px-4 py-2 rounded-md border-x border-y border-black text-black bg-transparent dark:bg-transparent dark:text-[#F5F5DC] dark:border-[#F5F5DC]"
        >
          MODE
        </button>
        <button
          aria-label="Home page"
          className={`control control-1 ${active.home ? "active-btn" : ""}`}
          onClick={() => switcher("home")}
        >
          <HomeIcon
            className={`${
              active.home
                ? "text-primary dark:text-black"
                : "text-black dark:text-primary"
            }`}
          />
        </button>
        <button
          aria-label="About page"
          className={`control control-2 ${active.about ? "active-btn" : ""}`}
          onClick={() => switcher("about")}
        >
          <UserIcon
            className={`${
              active.about
                ? "text-primary dark:text-black"
                : "text-black dark:text-primary"
            }`}
          />
        </button>
        <button
          aria-label="Portfolio page"
          className={`control control-3 ${
            active.portfolio ? "active-btn" : ""
          }`}
          onClick={() => switcher("portfolio")}
        >
          <BriefcaseIcon
            className={`${
              active.portfolio
                ? "text-primary dark:text-black"
                : "text-black dark:text-primary"
            }`}
          />
        </button>
        <button
          aria-label="Articles page"
          className={`control control-4 ${active.articles ? "active-btn" : ""}`}
          onClick={() => switcher("articles")}
        >
          <NewspaperIcon
            className={`${
              active.articles
                ? "text-primary dark:text-black"
                : "text-black dark:text-primary"
            }`}
          />
        </button>
        <button
          aria-label="Contact page"
          className={`control control-5 ${active.contact ? "active-btn" : ""}`}
          onClick={() => switcher("contact")}
        >
          <EnvelopeIcon
            className={`${
              active.contact
                ? "text-primary dark:text-black"
                : "text-black dark:text-primary"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default App;

/*

 <button
          onClick={changeMode}
          className="px-8 py-4 ml-48 mt-48 rounded-md border-x border-y border-black text-black bg-transparent dark:bg-transparent dark:text-[#F5F5DC] dark:border-[#F5F5DC]"
        >
          MODE
        </button>
*/
