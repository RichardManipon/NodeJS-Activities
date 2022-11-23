import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.text}>
        <span className={styles.spanintro}>Welcome</span>
        <h1 className={styles.h1}>Design and Develop Website with Purpose</h1>
        <p className={styles.p}>
          We are a small group of developers who solves problems, then write
          code.
        </p>
        <a href="#contact" className={styles.contactbtn1}>
          Contact Us
        </a>
      </div>
      <img className={styles.hero} src="/Hero.svg" alt="" />
    </div>
  );
};

export default Home;
