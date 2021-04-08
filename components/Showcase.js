import React from "react"
import styles from "../styles/Home.module.css"

const Showcase = () => {
  return (
    <>
      <section className={styles.showcase}>
        <div className={styles.bg}>
          <picture>
            <source
              media="(min-width: 375px)"
              srcset="/images/bg-desktop.svg"
            />
            <img src="/images/bg-mobile.svg" alt="" />
          </picture>
        </div>
        <div className={styles.overlay}>
          <div>
            <img src="/images/illustration-mockups.svg" alt="" />
          </div>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className={styles.btn}>Register Now</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase
