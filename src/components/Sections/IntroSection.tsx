'use client';

import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import Button from '../Layout/BtnComponent';

//--------------------------------------------------------------------- SLIDER BUTTONS

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-next2" onClick={onClick}>
      <Image
        src="/icons/chevron-arrow_right.svg"
        alt="Arrow right"
        layout="fill"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-prev2" onClick={onClick}>
      <Image
        src="/icons/chevron-arrow_left.svg"
        alt="Arrow left"
        layout="fill"
      />
    </div>
  );
}

//--------------------------------------------------------------------- INTRO SECTION

export default function IntroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container" id="intro-section__container">
        <div className="wrapper" id="intro-section__wrapper">
          <div className="slider__container">
            <Slider {...settings}>
              {/* SLIDE 1 */}

              <div className="slider__wrapper">
                <div className="slider__text">
                  <div className="slider__heading">
                    <h1>Zuverlässige</h1>
                    <h1>Lösung</h1>
                  </div>
                  <h6>
                    Der Industrierouter kann bei Bedarf mit externen
                    Zusatzmodulen um weitere Digitale und Analoge In- & Outputs
                    erweitert werden. Selbes gilt für andere Schnittstellen.
                    Dank serieller Kommunikationsschnittstellen können
                    verschiedene Geräte, einschließlich älterer Geräte, in das
                    Lösungsökosystem integriert werden.
                  </h6>

                  <div className="download-btn__wrapper">
                    <Button variant="primary" size="small" type="button">
                      Datenblatt
                    </Button>
                    <Button variant="secondary" size="small" type="button">
                      Infoblatt
                    </Button>
                  </div>
                </div>

                <div className="slider__image">
                  <Image
                    src="/images/hero-image-primary.png"
                    alt="Speambox"
                    layout="fill"
                  />
                </div>
              </div>

              {/* SLIDE 2 */}

              <div className="slider__wrapper">
                <div className="slider__text">
                  <div className="slider__heading">
                    <p>Wir sind bereit an deinen</p>
                    <h1>Ideen</h1>
                    <h1>zu arbeiten</h1>
                  </div>

                  <p>Denke nicht groß. Denke in neuen Dimensionen!</p>

                  <p>
                    Der SPUT112 ist ein Industrierouter, der Dual-SIM-Mobilfunk
                    4G LTE, Wi-Fi und kabelgebundene Konnektivitätsoptionen
                    unterstützt. Darüber hinaus verfügt er über
                    GNSS-Fähigkeiten.
                  </p>
                </div>
                <div className="slider__image">
                  <Image
                    src="/images/hero-image-secondary.png"
                    alt="Speambox"
                    layout="fill"
                  />
                </div>
              </div>

              {/* SLIDE 3 */}

              <div className="slider__wrapper">
                <div className="slider__text">
                  <div className="slider__heading">
                    <h1>Dein digitaler</h1>
                    <h1>Experte</h1>
                  </div>
                  <h4 className="slider__sub-heading">
                    Innovativ und Zukunftsorientiert
                  </h4>
                  <p>
                    Der Industrierouter ist mit fortschrittlichen, industriellen
                    Softwarefunktionen wie Modbus, SNMP, TR-069, NTRIP, MQTT und
                    mehreren VPNs ausgestattet.
                  </p>
                </div>
                <div className="slider__image">
                  <Image
                    src="/images/hero-image-tertiary.png"
                    alt="Speambox"
                    layout="fill"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
