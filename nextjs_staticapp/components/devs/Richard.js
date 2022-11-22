const Richard = ({ stylehome, styledev }) => {
  return (
    <div className={styledev.dev}>
      <div className={styledev.text}>
        <span className={stylehome.spanintro}>About</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          laboriosam aspernatur quibusdam sed excepturi, praesentium eum illum
          reprehenderit cumque, voluptatibus deserunt aut accusamus, ipsum vero
          tenetur numquam nostrum similique? Unde magnam, cupiditate veniam ipsa
          dolores officia obcaecati voluptatibus sed nemo corrupti
          necessitatibus autem repudiandae dolore nostrum? Voluptates
          perferendis adipisci ex!
        </p>
        <div>
          <span className={styledev.name}>Richard Manipon </span>
          <span className={styledev.role}>Designer</span>
        </div>
      </div>
      <div className={styledev.imgdiv}>
        <img className={styledev.img} src="/manipon.svg" alt="" />
        <div className={styledev.btngroup}>
          <img src="/prev-btn.svg" alt="" />
          <img src="/next-btn.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Richard;
