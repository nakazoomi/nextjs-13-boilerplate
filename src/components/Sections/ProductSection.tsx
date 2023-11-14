import Image from 'next/image';
import Button from '../Layout/BtnComponent';

export default function ProductSection() {
  return (
    <>
      <div className="container" id="product-section__container">
        <h1>Das kann die Box</h1>
        <div className="wrapper" id="product-section__wrapper">
          <div className="sticky-element">
            <p>Test</p>
          </div>
          <div className="product-section__text">
            <h2>Speambox Details</h2>
            <ul className="product-section__data-list">
              <li>Herstellerunabhängige Übersicht Ihrer Anlagen.</li>
              <li>Benachrichtigungen über Störungen und Alarme.</li>
              <li>Zeit- und Kostenersparnis durch Remotezugriff & -wartung.</li>
              <li>
                Ihre Anlage sind jederzeit ortsunabhängig ohne zusätzliche
                Software erreichbar (ohne VPN).
              </li>
              <li>
                Erhalten Sie Benachrichtigungen über E-Mail, SMS, Whatsapp oder
                Weiterleitungen an bestehende Alarm- & Notfallmanagementsysteme.
              </li>
              <li>
                Zentrale Übersicht aller Alarme und Störungsmeldungen in
                Echtzeit.
              </li>
              <li>
                Mehrere Anbindungsmöglichkeiten über WLAN, Ethernet oder
                Mobilfunk mit statischer oder dynamischer IP-Adresse.
              </li>
              <li>
                Einfacher Zugriff auf die Daten, Geräte, Einstellungen und
                Ereignisspeicher der Anlage.
              </li>
              <li>
                Webbasierter Zugriff auf die Oberfläche der Anlage, ohne Kabel,
                ohne zusätzliche Software oder zusätzliche VPN-Verbindung.
              </li>
            </ul>

            <div className="download-btn__wrapper">
              <Button variant="primary" size="small" type="button">
                Datenblatt
              </Button>
              <Button variant="secondary" size="small" type="button">
                Infoblatt
              </Button>
            </div>
          </div>
          <div>
            <div className="product-section__image-wrapper">
              <div className="product-section__image">
                <Image
                  src="/images/details-image-top.png"
                  alt="Speambox"
                  layout="fill"
                />
              </div>
            </div>

            <div className="product-section__image-wrapper">
              <div className="product-section__image">
                <Image
                  src="/images/details-image-bottom.png"
                  alt="Speambox"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <p>Entwickelt von Speam GmbH</p>
      </div>
    </>
  );
}
