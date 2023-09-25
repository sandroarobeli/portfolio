import eCommerce from "../img/e-commerce.png";
import maxCarriers from "../img/max-carriers.jpg";
import jobTracker from "../img/job-tracker.png";

const Portfolio = () => {
  return (
    <>
      <div className="mb-16">
        <p className="mb-3">
          I invite you to check out some of my work I selected based on their
          utility. A customizable e-commerce web application, a website for the
          trucking company and a personal assistant for tracking job
          applications.
        </p>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img
            src={eCommerce}
            alt="e-commerce web application"
            className="rounded-t mb-2 object-cover"
          />
          <h3 className="text-xl font-semibold">E-commerce</h3>
          <a
            href="https://e-commerce-57fd6.web.app/"
            target="_blank"
            className="text-lg p-2"
            rel="noreferrer"
          >
            Visit site
          </a>
        </div>
        <div className="portfolio-item">
          <img
            src={maxCarriers}
            alt="Trucking company website"
            className="rounded-t mb-2 object-cover"
          />
          <h3 className="text-xl font-semibold">Max Carriers</h3>
          <a
            href="https://maxcarriers.us"
            target="_blank"
            className="text-lg p-2"
            rel="noreferrer"
          >
            Visit site
          </a>
        </div>
        <div className="portfolio-item">
          <img
            src={jobTracker}
            alt="job application tracker"
            className="rounded-t mb-2 object-cover"
          />
          <h3 className="text-xl font-semibold">Application Tracker</h3>
          <a
            href="https://job-application-tracker-741af.web.app/"
            target="_blank"
            className="text-lg p-2"
            rel="noreferrer"
          >
            Visit site
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
