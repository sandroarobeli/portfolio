import HtmlIcon from "../icons/Html";
import CssIcon from "../icons/Css";
import JsIcon from "../icons/Js";
import ReactIcon from "../icons/React";
import ReduxIcon from "../icons/Redux";
import NodeIcon from "../icons/Node";
import TailwindIcon from "../icons/Tailwind";
import MuiIcon from "../icons/Mui";
import CsharpIcon from "../icons/Csharp";
import MongoIcon from "../icons/Mongo";
import SqlIcon from "../icons/Sql";
import GitIcon from "../icons/Git";

const About = () => {
  return (
    <>
      <div className="mb-16">
        <p className="mb-3">
          I am a web developer based in the United States. I focus on listening
          to you, the client, transforming your business needs into seamlessly
          functioning applications to help you grow and prosper.
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
    </>
  );
};

export default About;
