import styles from "../styles/Menu.module.css";

const Menu = ({ setHamburgerMenu }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.hamburgerdiv}>
        <button
          className={styles.hamburger}
          onClick={() => setHamburgerMenu(false)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul className={styles.links}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
