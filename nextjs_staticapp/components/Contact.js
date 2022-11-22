import stylecontact from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={stylecontact.contactbg} id="contact">
      <div>
        <span className={stylecontact.spanintro}>Contact</span>
        <h1 className={stylecontact.h1}>Get in touch</h1>
        <p className={stylecontact.p}>
          We are open to any opportunities, our inbox is always open. Do you
          want to say hi or need help? Feel free to message us.
        </p>
        <form action="">
          <div className={stylecontact.inputdiv}>
            <span className={stylecontact.inputspan}>Name</span>
            <input type="text" name="" id="" />
          </div>
          <div className={stylecontact.inputdiv}>
            <span className={stylecontact.inputspan}>Email</span>
            <input type="text" name="" id="" />
          </div>
          <div className={stylecontact.inputdiv}>
            <span className={stylecontact.inputspan}>Subject</span>
            <input type="text" name="" id="" />
          </div>
          <div className={stylecontact.inputdiv}>
            <span className={stylecontact.inputspan}>Message</span>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>
          <input className={stylecontact.send} type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
