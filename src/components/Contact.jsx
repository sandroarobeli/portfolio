import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import LocationIcon from "../icons/Location";
import EnvelopeIcon from "../icons/Envelope";
import PhoneIcon from "../icons/Phone";
import LinkedInIcon from "../icons/LinkedIn";
import Spinner from "../components/Spinner";
import Alert from "./Alert";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async ({ name, email, content }) => {
    if (name && email && content && !isSubmitting) {
      try {
        setIsSubmitting(true);
        const response = await emailjs.send(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATE_ID,
          {
            from_name: name,
            to_name: "Alex",
            reply_to: email,
            message: content,
          },
          process.env.REACT_APP_PUBLIC_KEY
        );
        setSuccessMessage("Your message has been sent successfully");
        console.log("Response: ", response); // Logger for me
      } catch (error) {
        setErrorMessage("An error has ocurred. Please try again later");
        console.log("Error: ", error); // Logger for me
      } finally {
        setIsSubmitting(false);
        setAlertOpen(true);
        reset();
      }
    }
  };

  return (
    <div className="contact-container">
      {/* CONTACT DETAILS */}
      <div className="contact-details">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">CONTACT</h3>
        </div>
        <ul className="w-full">
          <li className="contact-entry">
            <div className="flex justify-between">
              <LocationIcon className="contact-icon" />
              <p className="text-md sm:text-lg">Location:</p>
            </div>
            <p className="text-md sm:text-lg"> Chicago, United States</p>
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
      {/* INPUT FORM */}
      <div className="contact-form">
        <form
          className="mx-auto max-w-screen-md"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="mb-6">
            <input
              type="text"
              placeholder="Name"
              className={`w-full text-black focus:ring ${
                errors.name ? "ring-red-500" : "ring-primary-hover"
              }`}
              id="name"
              autoFocus
              {...register("name", {
                required: "Please enter your name",
              })}
            />
            {errors.name && (
              <div className="text-red-500 text-lg pl-2">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              className={`w-full text-black focus:ring ${
                errors.email ? "ring-red-500" : "ring-primary-hover"
              }`}
              id="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="text-red-500 text-lg pl-2">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Message..."
              className={`w-full text-black focus:ring ${
                errors.content ? "ring-red-500" : "ring-primary-hover"
              }`}
              id="content"
              name="content"
              rows="3"
              {...register("content", {
                required: "Please type your message",
              })}
            />
            {errors.content && (
              <div className="text-red-500 text-lg pl-2">
                {errors.content.message}
              </div>
            )}
          </div>
          <div className="">
            <button
              aria-label="Send your message"
              className="submit-button text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex justify-center items-center">
                  <Spinner
                    className="mr-4"
                    strokeColor="#000000"
                    strokeWidth="20"
                  />
                  Sending
                </span>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </form>
      </div>
      <Alert
        message={errorMessage ? errorMessage : successMessage}
        show={alertOpen}
        onClose={() => {
          setAlertOpen(false);
          setErrorMessage("");
          setSuccessMessage("");
        }}
        className={`alert-content ${
          errorMessage ? "bg-red-600" : "bg-green-600"
        }`}
      />
    </div>
  );
};

export default Contact;
