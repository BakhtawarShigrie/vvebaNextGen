import Link from "next/link";
import { useMemo } from 'react';

export const HomeAreaAbout = () => {
  const backgroundStyles = useMemo(() => ({
    backgroundImage: "url('https://vveba.s3.eu-north-1.amazonaws.com/about/hero-2.jpg')",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: 1,
    height: '100%',
  }), []);

  const overlayStyles = useMemo(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1,
  }), []);

  const titlePreStyles = useMemo(() => ({
    color: '#ffffff'
  }), []);

  const phoneIconStyles = useMemo(() => ({
    color: '#e92e3e'
  }), []);

  const phoneLinkStyles = useMemo(() => ({
    color: '#fff'
  }), []);

  const phoneNumberStyles = useMemo(() => ({
    color: '#fff'
  }), []);

  return (
    <section
      className="tp-about-parallax pt-xl-5 pb-xl-5"
      style={backgroundStyles}
    >
      {/* Overlay for better text readability */}
      <div style={overlayStyles}></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-sm-12">
            <div className="tp-about-4-wrapper" style={{color: '#fff'}}>
              <div
                className="tp-about-4-title-wrapper text-center wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="tp-home-4-service-title text-center mt-10">
                  <span
                    className="tp-section-v_2-title-pre"
                    style={titlePreStyles}
                  >
                    ABOUT US
                  </span>
                  <h3 className="tp-section-title">
                    VVEBA turns learners into IT entrepreneur with real skills and
                    guaranteed jobs.
                  </h3>
                </div>
              </div>
              <p
                className="wow fadeInDown text-center"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                Learn, build, and get hired—VVEBA's step-by-step tech journey takes you
                from beginner to specialist, backed by global certifications and
                industry-grade job guarantees.
              </p>
              <div
                className="tp-about-quote text-center mt-50 wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <h4 className="tp-about-quote-title">
                  Build with us, Grow with us, Stay with us.
                </h4>
              </div>
              <div className="tp-about-4-cta d-flex justify-content-center mt-60 mb-10 align-items-center align-items-sm-start">
                <div className="tp-hero-btn mr-30 hero-btn-4">
                  <Link className="tp-btn" href="about" prefetch={false}>
                    discover more
                  </Link>
                </div>
                <div className="tp-hero-about-4-cta-info">
                  <div className="tp-hero-about-4-cta-icon">
                    <i className="fal fa-phone" style={phoneIconStyles}></i>
                  </div>

                  <div className="tp-hero-about-4-cta-contact pl-15">
                    <a href="tel:9231971671681" style={phoneLinkStyles}>
                      <span>Call for help</span>
                      <h4 style={phoneNumberStyles}>+92 319 71671681</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};