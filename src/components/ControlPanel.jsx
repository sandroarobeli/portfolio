import HomeIcon from "../icons/Home";
import UserIcon from "../icons/User";
import BriefcaseIcon from "../icons/Briefcase";
import NewspaperIcon from "../icons/Newspaper";
import EnvelopeIcon from "../icons/Envelope";

const ControlPanel = ({ activePage, setActivePage, className }) => {
  return (
    <div className={className}>
      <button
        aria-label="Home page"
        className={`control-button-mobile sm:control-button-laptop ${
          activePage === "home" ? "active-button" : ""
        }`}
        onClick={() => setActivePage("home")}
      >
        <HomeIcon
          className={`w-1/2 h-1/2 ${
            activePage === "home"
              ? "text-primary dark:text-black"
              : "text-black dark:text-primary"
          }`}
        />
      </button>
      <button
        aria-label="About page"
        className={`control-button-mobile sm:control-button-laptop ${
          activePage === "about" ? "active-button" : ""
        }`}
        onClick={() => setActivePage("about")}
      >
        <UserIcon
          className={`w-1/2 h-1/2 ${
            activePage === "about"
              ? "text-primary dark:text-black"
              : "text-black dark:text-primary"
          }`}
        />
      </button>
      <button
        aria-label="Portfolio page"
        className={`control-button-mobile sm:control-button-laptop ${
          activePage === "portfolio" ? "active-button" : ""
        }`}
        onClick={() => setActivePage("portfolio")}
      >
        <BriefcaseIcon
          className={`w-1/2 h-1/2 ${
            activePage === "portfolio"
              ? "text-primary dark:text-black"
              : "text-black dark:text-primary"
          }`}
        />
      </button>
      <button
        aria-label="Articles page"
        className={`control-button-mobile sm:control-button-laptop ${
          activePage === "articles" ? "active-button" : ""
        }`}
        onClick={() => setActivePage("articles")}
      >
        <NewspaperIcon
          className={`w-1/2 h-1/2 ${
            activePage === "articles"
              ? "text-primary dark:text-black"
              : "text-black dark:text-primary"
          }`}
        />
      </button>
      <button
        aria-label="Contact page"
        className={`control-button-mobile sm:control-button-laptop ${
          activePage === "contact" ? "active-button" : ""
        }`}
        onClick={() => setActivePage("contact")}
      >
        <EnvelopeIcon
          className={`w-1/2 h-1/2 ${
            activePage === "contact"
              ? "text-primary dark:text-black"
              : "text-black dark:text-primary"
          }`}
        />
      </button>
    </div>
  );
};

export default ControlPanel;
