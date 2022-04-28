import React from "react";
import "./Contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

function Contact() {
  return (
    <div className="contact">
      <div className="title">
        <h1>Contact Me</h1>
      </div>

      <h3 className="heading">Do you have any questions ?</h3>

      <p className="sub-heading">PLEASE KINDLY CONTACT ME</p>

      <div className="contact-row">
        <div className="contact-item">
          <BsTelephoneFill className="icon" />
          <h4>Contact</h4>
          <p>017-5809218</p>
        </div>

        <div className="contact-item">
          <MdEmail className="icon" />
          <h4>Email</h4>
          <p>yanshiuh12372@gmail.com</p>
        </div>

        <div className="contact-item">
          <ImLinkedin className="icon" />
          <h4>
            <a
              href="https://www.linkedin.com/in/kee-yan-shiuh-9369a5229/"
              target="_blank"
            >
              LinkedIn
            </a>
          </h4>
          <p>Kee Yan Shiuh</p>
        </div>
      </div>

      <form className="email-box">
        <h3 className="heading">SENT ME AN EMAIL</h3>

        <p className="sub-heading">I'M VERY RESPONSIVE TO MESSAGES</p>

        {/* <div className="email-row">
          <div className="name">
            <input type={"name"} placeholder="Name" />
          </div>

          <div className="email">
            <input type={"email"} placeholder="Email" />
          </div>
        </div>

        <div className="subject">
          <input type={"subject"} placeholder="Subject" />
        </div>

        <div className="message">
          <textarea placeholder="Message" />
        </div>

        <input type={"button"} className="btn" value="Send Message" /> */}
      </form>
    </div>
  );
}

export default Contact;
