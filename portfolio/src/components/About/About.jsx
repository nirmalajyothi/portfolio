import React from "react";
import { getImageUrl } from "../../utils";
import styels from "./About.module.css"

function About() {
  return (
    <section className={styels.containter} id="about">
      <h2 className={styels.title}>ABOUT</h2>

      <div className={styels.content}>
        <img className={styels.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="about image"  />
        <ul className={styels.aboutItems}>
          <li className={styels.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div  className={styels.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a front-end developer with experience in buliding responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li  className={styels.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />

            <div  className={styels.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have experience developing fast and optimised back-end systems
              and APIs
              </p>
            </div>
          </li>
          <li  className={styels.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="cursor" />
            <div  className={styels.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I have designed multiple landing pages and have created design
              systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
