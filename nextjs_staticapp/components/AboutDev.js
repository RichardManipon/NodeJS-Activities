import stylehome from "../styles/Home.module.css";
import styledev from "../styles/Dev.module.css";
import styleglobals from "../styles/Globals.module.css";
import Richard from "./devs/Richard";

const AboutDev = () => {
  return (
    <div className={styleglobals.padd2}>
      <Richard stylehome={stylehome} styledev={styledev} />
    </div>
  );
};

export default AboutDev;
