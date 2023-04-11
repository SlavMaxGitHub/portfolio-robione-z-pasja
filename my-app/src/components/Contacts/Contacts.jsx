import React from "react";

import ContactsForm from "./ContactsForm/ContactsForm";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <>
      <section className="contact-wrapper">
        <div className="contact">
          <h2 className="contact-title">Kontakt</h2>

          <a
            className="contact-link"
            href="mailto:zpasjarobione@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-regular fa-at" style={{ color: "#d63384" }}></i>
            zpasjarobione@gmail.com
          </a>
          <a
            className="contact-link"
            href="https://www.instagram.com/robione.z.pasja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram" style={{ color: "#d63384" }}></i>@
            robione.z.pasja
          </a>

          <a
            className="contact-link"
            href="https://www.google.com/maps/place/%C5%9Awidnica/@50.8407062,16.4576068,13z/data=!3m1!4b1!4m6!3m5!1s0x470e4d36a731e551:0x7c72a14dac6c836e!8m2!3d50.8498434!4d16.475679!16zL20vMDE0MV9z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fa-solid fa-location-dot"
              style={{ color: "#d63384" }}
            ></i>
            Świdnica
          </a>
        </div>
        <div className="formContact">
          <ContactsForm />
        </div>
      </section>
    </>
  );
};

export default Contacts;
