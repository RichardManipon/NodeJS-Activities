import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Globals.module.css";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import AboutDev from "../components/AboutDev";

export default function Index() {
  return (
    <div className={styles.padd}>
      <Navbar />
      <Home />
      <AboutDev />
    </div>
  );
}
