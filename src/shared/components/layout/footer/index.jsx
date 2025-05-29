export const Footer = () => {
  return (
    <footer
      className="tp-footer-area pt-80 p-relative z-index-1"
      data-bg-color="#0E1E2A"
    >
      <div
        className="tp-footer-bg"
        data-background="/assets/img/footer/footer-bg.png"
      ></div>
      <div className="tp-footer-main-area tp-footer-border">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="tp-footer-widget tp-footer-col-1 mb-50">
                <div className="tp-footer-logo mb-20">
                  <a href="/home">
                    {' '}
                    <h2 className="text-white">SoftX</h2>
                  </a>
                </div>
                <div className="tp-footer-widget-content">
                  <p>
                    Pioneering Innovation, Crafting Tomorrow's Solutions Today.
                    Embrace the Future with Our Cutting-Edge Technology and
                    Expertise, Tailored to Elevate Your Business to New Heights.
                  </p>
                  <div className="tp-footer-input-email p-relative">
                    <input type="text" placeholder="Your mail address" />
                    <button>
                      {' '}
                      <span>
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>
                    </button>
                  </div>
                  <div className="tp-footer-widget-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="tp-footer-widget tp-footer-col-3 mb-50">
                <h3 className="text-left text-md-center ml-0 ml-md-55 tp-footer-widget-title">
                  Support Links
                </h3>

                <div className="tp-footer-widget-content d-block d-md-flex justify-content-center">
                  <ul>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Internships</a>
                    </li>
                    <li>
                      <a href="#">Courses </a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">About Us </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="tp-footer-widget tp-footer-col-4 mb-50">
                <h3 className="tp-footer-widget-title">Get in Touch</h3>
                <div className="tp-footer-widget-content">
                  <div className="tp-footer-widget-contact d-flex align-items-center mb-25">
                    <div className="tp-footer-widget-contact-icon">
                      <span>
                        <i className="fa-solid fa-phone"></i>
                      </span>
                    </div>
                    <div className="tp-footer-widget-contact-content">
                      <a href="tel:923041699991">(092) 304 16 99 991</a>
                      <br />
                      <a href="tel:923134022275">(092) 313 40 22 275</a>
                    </div>
                  </div>
                  <div className="tp-footer-widget-contact d-flex align-items-center mb-25">
                    <div className="tp-footer-widget-contact-icon">
                      <span>
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>
                    </div>
                    <div className="tp-footer-widget-contact-content">
                      <a
                        href="https://www.google.com/maps/place/Eden+Gardens,+Lahore,+Punjab,+Pakistan/@31.3907053,74.351307,15z/data=!3m1!4b1!4m6!3m5!1s0x391907862cebed07:0x9f5d34e09083a562!8m2!3d31.3897307!4d74.3719431!16s%2Fg%2F1tg6t2lk?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                      >
                        Eden Gardens,{' '}
                      </a>
                      <br />
                      <a
                        href="https://www.google.com/maps/place/Gajju+Matah,+Lahore,+Punjab,+Pakistan/@31.3859959,74.3550292,15z/data=!3m1!4b1!4m6!3m5!1s0x3919a8298d0bfc69:0x1898a929b479a31c!8m2!3d31.3862146!4d74.3660784!16s%2Fm%2F0qzfrqd?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                      >
                        Gajjumatta, Lahore.
                      </a>
                    </div>
                  </div>
                  <div className="tp-footer-widget-contact d-flex align-items-center">
                    <div className="tp-footer-widget-contact-icon">
                      <span>
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                    </div>
                    <div className="tp-footer-widget-contact-content">
                      <a href="mailto:inquiry@softx.solutions">
                        inquiry@softx.solutions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-copyright-area p-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="tp-footer-copyright-inner">
                <p>© Soft-X {new Date().getFullYear()} | All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="tp-footer-copyright-inner text-lg-end">
                <a href="#">Terms and conditions</a>
                <a href="#"> Privacy policy</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
