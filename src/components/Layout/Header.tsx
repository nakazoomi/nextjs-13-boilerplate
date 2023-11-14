'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [activeSection, setActiveSection] = useState(
    'intro-section__container'
  );

  const scrollToSection = (sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState({}, '', `#${sectionId}`);
  };

  const handleScroll = () => {
    const sections = [
      'intro-section__container',
      'product-section__container',
      'price-section__container',
      'contact-section__container',
    ];

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop >= 0 && sectionTop <= window.innerHeight / 2) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (sectionId) => {
    return activeSection === sectionId ? 'active' : '';
  };

  return (
    <>
      <header>
        <div className="container" id="header__container">
          <div className="wrapper" id="header__wrapper">
            <div className="logo__wrapper">
              <Image src="/images/speambox-logo.png" alt="Logo" layout="fill" />
            </div>

            <nav className="navigation">
              <Link href="#intro-section__container">
                <button
                  className={`btn--secondary ${isActive(
                    'intro-section__container'
                  )}`}
                >
                  Home
                </button>
              </Link>

              <Link href="#product-section__container">
                <button
                  className={`btn--secondary ${isActive(
                    'product-section__container'
                  )}`}
                >
                  Details
                </button>
              </Link>

              <Link href="#price-section__container">
                <button
                  className={`btn--secondary ${isActive(
                    'price-section__container'
                  )}`}
                >
                  Preise
                </button>
              </Link>

              <Link href="#contact-section__container">
                <button
                  className={`btn--secondary ${isActive(
                    'contact-section__container'
                  )}`}
                  onClick={() => scrollToSection('contact-section__container')}
                >
                  Contact
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
