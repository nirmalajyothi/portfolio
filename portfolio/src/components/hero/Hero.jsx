import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"


function Hero() {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}> Hi, I'm Nirmala Jyothi</h1>
    <p className={styles.description}> I'm a full-stack developer a passionate about building web applications</p>
    <a className={styles.contactBtn} href="mailto:myemail.com"> Contact me</a>
    </div>
    <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero image" />
    <div className={styles .topBlur}/>
    <div className={styles .bottomBlur}/>
   </section>
  )
}

export default Hero
