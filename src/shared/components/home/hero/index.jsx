export const HeroSection = () => {
  return (
    <section
      className="tp-hero-4-area tp-hero-4-height d-flex align-items-center p-relative"
      data-background="/assets/img/hero/home-4/hero-4-bg.png"
    >
      <div className="container">
        <div className="tp-hero-4-main-wrapper">
          <div className="d-flex align-items-center justify-content-center shape-ps tp-hero-4-shape">
            <div
              className="tp-hero-4-content p-relative z-index-1 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="tp-hero-4-title-wrapper ">
                <h2 className="tp-hero-title">
                  Build with us, Grow with us, <br /> Stay with us.
                </h2>
              </div>
              <br />
              <center>
                <p className="pt-10 pb-30 tp-home-4-hero-text">
                  {" "}
                  Begin with 6 months of skill development, dedicate 2 months to
                  building a strong portfolio, and step into freelancing with an
                  initial goal of earning $200/month. Through real-world
                  experience, ongoing learning, and mentorship, scale your
                  income steadily up to $10,000/month.{" "}
                </p>
                <br />
                <div className="d-flex flex-wrap mt-20 justify-content-center">
                  <div className="tp-hero-btn hero-btn-4">
                    <a className="tp-btn" href="about.html">
                      Get Registered{" "}
                    </a>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
