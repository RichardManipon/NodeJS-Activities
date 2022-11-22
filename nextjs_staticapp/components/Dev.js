import { useEffect } from "react";

const Dev = ({
  stylehome,
  styledev,
  carousel,
  setCarousel,
  name,
  setName,
  role,
  setRole,
  intro,
  setIntro,
  image,
  setImage,
}) => {
  useEffect(() => {
    if (carousel == 0) {
      setName("Daryl Magpantay");
      setRole("Manager");
      setImage("daryl.svg");
      setCarousel(5);
    }
    if (carousel == 1) {
      setName("Richard Manipon");
      setRole("Designer");
      setImage("manipon.svg");
    }
    if (carousel == 2) {
      setName("Louise Yagi");
      setRole("Developer");
      setImage("yagi.svg");
    }
    if (carousel == 3) {
      setName("Justine Upano");
      setRole("Developer");
      setImage("justine.svg");
    }
    if (carousel == 4) {
      setName("James Ferrer");
      setRole("Designer");
      setImage("james.svg");
    }
    if (carousel == 5) {
      setName("Daryl Magpantay");
      setRole("Manager");
      setImage("daryl.svg");
    }
    if (carousel == 6) {
      setName("Richard Manipon");
      setRole("Designer");
      setImage("manipon.svg");
      setCarousel(1);
    }
  });

  const handleNextPrevBtn = (bool) => {
    setTimeout(() => {
      if (bool == true) {
        setCarousel(carousel + 1);
      } else {
        setCarousel(carousel - 1);
      }
    }, 300);
  };
  return (
    <div className={styledev.dev}>
      <div className={styledev.text}>
        <span className={stylehome.spanintro}>About</span>
        <p className={styledev.p}>{intro}</p>
        <div>
          <span className={styledev.name}>{name} </span>
          <span className={styledev.role}>{role}</span>
        </div>
      </div>
      <div className={styledev.imgdiv}>
        <img className={styledev.img} src={"/" + image} alt="" />
        <div className={styledev.btngroup}>
          <img
            src="/prev-btn.svg"
            alt=""
            onClick={() => handleNextPrevBtn(false)}
          />
          <img
            src="/next-btn.svg"
            alt=""
            onClick={() => handleNextPrevBtn(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dev;
