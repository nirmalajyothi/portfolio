import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            //rendering data from  history.json
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul  className={styles.history}>
          {history.map((item, id) => {
            //rendering data from  history.json
            return (
              <li key={id}  className={styles.historyItem}>
                <img
                  src={getImageUrl(item.imageSrc)}
                  alt={`${item.organisation} Logo`}
                />
                <div  className={styles.historyItemDetails}>
                  <h3>{`${item.role} , ${item.organisation}`}</h3>
                  <p>{`${item.startDate}- ${item.endDate}`}</p>
                  <ul >
                   
                    {item.experiences.map((experienceItem, id) => {
                      //rendering exprience form array //
                      return <li key={id}>{experienceItem}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
