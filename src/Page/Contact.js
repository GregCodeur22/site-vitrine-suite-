import React from "react";
import Mouse from "../Component/Mouse";
import Navigation from "../Component/Navigation";
import Logo from "../Component/Logo";
import ContactForm from "../Component/ContactForm";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue laplace</p>
              <p>64200 Biarritz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipBoard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
