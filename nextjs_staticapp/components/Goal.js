import styles from "../styles/Goal.module.css";

const Goal = () => {
  return (
    <section className={styles.goal} id="goals">
      <div className={styles.row}>
        <div className={styles.text}>
          <h4 className={styles.span}>Animation</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            tempore illo necessitatibus culpa iusto atque hic molestiae quis
            voluptates? Quo maxime ratione temporibus excepturi praesentium ad
            inventore dicta? Eos, facere iste recusandae sint distinctio, sit ab
            molestiae quae itaque debitis rerum laborum ut quas. Necessitatibus
            labore aspernatur non? Minus, labore?
          </p>
        </div>
        <img src="/goal1.svg" alt="" />
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <h4 className={styles.span}>Business</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            tempore illo necessitatibus culpa iusto atque hic molestiae quis
            voluptates? Quo maxime ratione temporibus excepturi praesentium ad
            inventore dicta? Eos, facere iste recusandae sint distinctio, sit ab
            molestiae quae itaque debitis rerum laborum ut quas. Necessitatibus
            labore aspernatur non? Minus, labore?
          </p>
        </div>
        <img src="/goal2.svg" alt="" />
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <h4 className={styles.span}>Design</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            tempore illo necessitatibus culpa iusto atque hic molestiae quis
            voluptates? Quo maxime ratione temporibus excepturi praesentium ad
            inventore dicta? Eos, facere iste recusandae sint distinctio, sit ab
            molestiae quae itaque debitis rerum laborum ut quas. Necessitatibus
            labore aspernatur non? Minus, labore?
          </p>
        </div>
        <img src="/goal3.svg" alt="" />
      </div>
    </section>
  );
};

export default Goal;
