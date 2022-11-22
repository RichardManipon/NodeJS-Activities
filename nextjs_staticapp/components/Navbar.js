import styles from "../styles/Navbar.module.css";

const Navbar = ({ setHamburgerMenu }) => {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="#home">Iskulbukul</a>
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
      <button
        className={styles.hamburger}
        onClick={() => setHamburgerMenu(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
