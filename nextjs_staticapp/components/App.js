import Home from "/components/Home";
import Navbar from "/components/Navbar";
import Menu from "/components/Menu";
import AboutDev from "/components/AboutDev";
import Contact from "/components/Contact";
import Footer from "/components/Footer";
import Goal from "/components/Goal";
import { useState } from "react";

const App = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return (
    <div>
      {hamburgerMenu ? <Menu setHamburgerMenu={setHamburgerMenu} /> : ""}
      <Navbar setHamburgerMenu={setHamburgerMenu} />
      <Home />
      <Goal />
      <AboutDev />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
