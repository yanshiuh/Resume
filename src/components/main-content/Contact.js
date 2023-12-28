import React from "react";
import "./Contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact bg-white rounded-2xl p-10 bg-opacity-80">
      <div className="title font-bold text-3xl">
        <h1>Contact Me</h1>
      </div>

      <h3 className="heading">Do you have any questions ?</h3>

      <p className="sub-heading">PLEASE KINDLY CONTACT ME</p>

      <div className="contact-row">
        <div className="contact-item">
          <BsTelephoneFill className="icon" size={25} />
          <h4>Contact</h4>
          <p>017-5809218</p>
        </div>

        <div className="contact-item">
          <MdEmail className="icon" size={25} />
          <h4>Email</h4>
          <p>yanshiuh12372@gmail.com</p>
        </div>

        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/kee-yan-shiuh-9369a5229/"
            target="_blank"
          >
            <ImLinkedin className="icon" size={25} />
          </a>
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

        <div className="contact-item">
          <a href="https://github.com/yanshiuh" target="_blank">
            <BsGithub className="icon" size={25} />
          </a>
          <h4>
            <a href="https://github.com/yanshiuh" target="_blank">
              Github
            </a>
          </h4>
          <p>yanshiuh</p>
        </div>
      </div>

      <div className="email-box">
        <h3 className="heading">SEND ME AN EMAIL</h3>

        <p className="sub-heading">I'M VERY RESPONSIVE TO MESSAGES</p>
      </div>
    </div>
  );
}

export default Contact;
