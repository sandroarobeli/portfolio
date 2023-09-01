import { useState, useEffect } from "react";

import HomeIcon from "./icons/Home";
import UserIcon from "./icons/User";
import BriefcaseIcon from "./icons/Briefcase";
import NewspaperIcon from "./icons/Newspaper";
import EnvelopeIcon from "./icons/Envelope";
// IMPORTANT NOTES: FAVICON, SEO, ACCESSIBILITY, LIGHTHOUSE etc...
// ALSO: BRANCH OFF TO A HIDDEN COMPONENT AND EITHER LOG OR DISPLAY A VISITOR COUNTER!
// NEXT: READ ON FONT SIZING AND KEEP FILLING BASIC CONFIG SETTINGS AS THIS GUY GOES ON...
// TIMESTAMP: 46:00
// IN CASE I NEED TO CHANGE BUTTONS INTO DIVS, REFERENCE STARTS AT 22:00. (POINTER EVENTS ETC)

// ID ATTRIBUTES MAY NOT BE NECESSARY AFTER ALL. REMOVE THEM IF SO...
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
      <header
        id="home"
        className={`section section-1 header ${active.home ? "active" : ""}`}
      >
        HOME TEST
      </header>
      <main className="">
        <section
          id="about"
          className={`section section-2 about ${active.about ? "active" : ""}`}
        >
          ABOUT TEST
        </section>
        <section
          id="portfolio"
          className={`section section-3 portfolio ${
            active.portfolio ? "active" : ""
          }`}
        >
          SECTION TEST
        </section>
        <section
          id="articles"
          className={`section section-4 articles ${
            active.articles ? "active" : ""
          }`}
        >
          ARTICLES TEST
        </section>
        <section
          id="contact"
          className={`section section-5 contact ${
            active.contact ? "active" : ""
          }`}
        >
          CONTACT TEST
        </section>
      </main>
      <div className="controls">
        <button
          data-id="home"
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
          data-id="about"
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
          data-id="portfolio"
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
          data-id="articles"
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
          data-id="contact"
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
        <button
          onClick={changeMode}
          className="px-8 py-4 ml-48 mt-48 rounded-md border-x border-y border-black text-black bg-transparent dark:bg-transparent dark:text-[#F5F5DC] dark:border-[#F5F5DC]"
        >
          MODE
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
