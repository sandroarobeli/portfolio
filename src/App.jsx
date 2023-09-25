import { useState, useEffect } from "react";

import ControlPanel from "./components/ControlPanel";
import About from "./components/About";
import Articles from "./components/Articles";
import Portfolio from "./components/Portfolio";
import ThemeIcon from "./icons/Theme";
import LocationIcon from "./icons/Location";
import EnvelopeIcon from "./icons/Envelope";
import PhoneIcon from "./icons/Phone";
import LinkedInIcon from "./icons/LinkedIn";
// import LocationIcon2 from "./icons/Location21";

// IMPORTANT NOTES: FAVICON, SEO, ACCESSIBILITY, LIGHTHOUSE etc...
// ALSO: BRANCH OFF TO A HIDDEN COMPONENT AND EITHER LOG OR DISPLAY A VISITOR COUNTER!

// ONCE ALL PAGES ARE COMPLETE, TRY AND FIND WHERE TO PLACE MIN-H-SCREEN SO IT STAYS COMPACT!
// ALSO LOOK INTO ASP.NET WEB APP TEMPLATES FOR GUIDANCE

// TEMPLATE FOR FINAL VIEW: <section><CustomElement /></section>
// DO THE LAZY LOADING AT THE VERY END AFTER EXTRACTING CUSTOM COMPONENTS

// MAYBE USE MY PHOTO FOR FAVICON?

// BETWEEN SUB-SECTIONS: MB-16, AFTER SECTION MB-10 (OR MAYBE 16) FOR NOW...

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
  // min-h-screen
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
            <p className="mb-3">
              Dedicated to developing well functioning web applications.
            </p>
            <p>
              Passionate about solving business problems through human-centered
              approach.
            </p>
            <p>
              HERE, I INVITE YOU TO VISIT MY WORK, READ MY ARTICLES AND GET IN
              TOUCH...
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
            <About />
          </div>
        </section>

        <section
          // style={{ border: "1px solid red" }}
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
          style={{ border: "1px solid red" }}
        >
          <div className="mb-10">
            <h1 className="first-name">Let's</h1>
            <h1 className="last-name">talk</h1>
          </div>
          <div className="mb-10 page-content">
            <div className="contact-container">
              <div
                className="contact-container-info"
                style={{ border: "1px solid red" }}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-semibold">CONTACT</h3>
                </div>
                <ul className="w-full">
                  <li className="contact-entry">
                    <div className="flex justify-between">
                      <LocationIcon className="contact-icon" />
                      <p className="text-md sm:text-lg">Location:</p>
                    </div>

                    <p className="text-md sm:text-lg">
                      {" "}
                      Chicago, United States
                    </p>
                  </li>

                  <li className="contact-entry">
                    <div className="flex justify-between">
                      <EnvelopeIcon className="contact-icon" />
                      <p className="text-md sm:text-lg">Email:</p>
                    </div>
                    <p className="text-md sm:text-lg">
                      <a
                        className="inline"
                        aria-label="Send Alex Arobelidze an email"
                        href="mailto:alex@lazikadigital.com"
                      >
                        alex@lazikadigital.com
                      </a>
                    </p>
                  </li>

                  <li className="contact-entry">
                    <div className="flex justify-between">
                      <PhoneIcon className="contact-icon" />
                      <p className="text-md sm:text-lg">Phone:</p>
                    </div>

                    <p className="text-md sm:text-lg">
                      <a
                        className="inline"
                        aria-label="Initiate a phone call to Alex Arobelidze"
                        href="tel:+1-847-701-5197"
                      >
                        (847) 701-5197
                      </a>
                    </p>
                  </li>

                  <li className="contact-entry">
                    <div className="flex justify-between">
                      <LinkedInIcon className="contact-icon fill-current" />
                      <p className="text-md sm:text-lg">LinkedIn:</p>
                    </div>

                    <p className="text-md sm:text-lg">
                      <a
                        aria-label="View Alex Arobelidze's LinkedIn profile"
                        href="https://www.linkedin.com/in/alex-arobelidze-ua/"
                        target="_blank"
                        className="inline"
                        rel="noreferrer"
                      >
                        View my profile
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div
                style={{ border: "1px solid green" }}
                className="w-full sm:w-3/5"
              >
                Contact form right
              </div>
            </div>
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
