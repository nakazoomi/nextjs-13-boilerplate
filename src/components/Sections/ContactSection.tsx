import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <>
      <div className="container" id="contact-section__container">
        <div className="wrapper" id="contact-section__wrapper">
          <h1>So Erreichst Du Uns</h1>
          <div className="contact-section__grid">
            <ContactForm />

            <div>
              <h2>Kontakt</h2>
              <p>0711 94787 90</p>
              <p>Fontanestr. 11, 70771 Musberg</p>
              <p>info@speam.de</p>
              <p>www.speam.de</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
