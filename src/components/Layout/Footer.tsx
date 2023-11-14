'use client';

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

export default function Footer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <>
      <footer>
        <div className="container" id="footer__container">
          <div className="wrapper" id="footer__wrapper">
            {/* <div className="video-background"> */}
            {/* <video autoPlay loop muted playsInline ref={videoRef}>
              <source src="/videos/speam-video-02.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video> */}

            <div className="footer-content">
              <div className="footer-logo__wrapper">
                <Image
                  src="/images/speam-logo.png"
                  alt="Logo Speam"
                  layout="fill"
                />
              </div>
              <p>© Copyright Speam GmbH</p>
              <p>Impressum</p>
              <p>Datenschutz</p>
              <p>AGB</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </footer>
    </>
  );
}
