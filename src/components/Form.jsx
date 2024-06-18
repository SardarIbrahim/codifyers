import styles from "../styles/form.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  /* Send Email Function */
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Clicked");

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="form" className={`${styles.forms__container} container`}>
      {/* form header */}
      <div className={styles.forms__header}>
        <h1>Get in touch</h1>
        <p>React out, and lets create a univers of possibilities together! </p>
      </div>

      {/* forms container */}
      <form className={styles.forms__grid} ref={form} onSubmit={sendEmail}>
        {/* left form */}
        <div className={styles.left__form}>
          {/* Name */}
          <div className={styles.input__wrapper}>
            <input type="text" placeholder="Full Name" name="name" required />
          </div>

          {/* Email */}
          <div className={styles.input__wrapper}>
            <input type="email" placeholder="Email" name="email" required />
          </div>

          {/* Message */}
          <div className={styles.input__wrapper}>
            <textarea
              rows="4"
              cols="50"
              placeholder="Message"
              name="message"
            ></textarea>
          </div>

          {/* submit */}
          <div className={styles.input__wrapper}>
            {/* cta */}
            <button type="submit">
              Submit ➖
            </button>
          </div>
        </div>
      </form>

      {/* forms svg */}
      <svg
        className={styles.form__svg}
        width="180"
        height="54"
        viewBox="0 0 180 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M177.552 32.2727C177.4 34.7963 175.424 37.5334 170.894 40.214C166.435 42.8521 159.944 45.157 151.805 46.9619C135.555 50.5655 113.2 52.0771 88.615 50.5902C64.0301 49.1032 42.0198 44.9083 26.3229 39.3725C18.4611 36.5998 12.2946 33.5293 8.18667 30.3732C4.01235 27.166 2.38092 24.2108 2.53355 21.6872C2.68619 19.1636 4.6619 16.4266 9.19231 13.7459C13.6507 11.1079 20.1424 8.80297 28.281 6.99808C44.5306 3.39442 66.8861 1.88287 91.471 3.36981C116.056 4.85675 138.066 9.05164 153.763 14.5875C161.625 17.3601 167.791 20.4306 171.899 23.5868C176.074 26.7939 177.705 29.7491 177.552 32.2727Z"
          fill="#D9D9D9"
          stroke="#F5EC10"
          strokeWidth="4"
        />
      </svg>
    </section>
  );
};

export default Form;
