import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>feel free to reach out</p>
      </div>
      <ul  className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="nnirmalajyothiVangalapudi9@gmail.com">
            nnirmalajyothiVangalapudi9@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon" />
          <a href="https://github.com/nirmalajyothi">
          https://github.com/nirmalajyothi
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon" />
          <a href="https://www.linkedin.com/in/nirmalajyothi2022/">
          https://www.linkedin.com/in/nirmalajyothi2022/
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
