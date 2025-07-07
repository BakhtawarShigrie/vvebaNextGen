export const Footer = () => {
  return (
   <footer
    className="tp-footer-area pt-80 p-relative z-index-1"
    data-bg-color="#363f46"
   >
    <div className="tp-footer-bg"></div>
    <div className="tp-footer-main-area tp-footer-border">
     <div className="container">
      <div className="row">
       <div className="col-xl-4 col-lg-4 col-md-4">
        <div className="tp-footer-widget tp-footer-col-1 mb-50">
         <div className="tp-footer-logo mb-20">
          <a href="/home">
           {' '}
           <h2 className="text-white">Vveba</h2>
          </a>
         </div>
         <div className="tp-footer-widget-content">
          <p>
           VVEBA Pvt. Ltd. empowers passionate learners to become global tech
           leaders through real-world training, guaranteed jobs, and
           industry-recognized certifications—step into your future.
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
         <h3 className="text-left ml-0 ml-md-55 tp-footer-widget-title">
          Support Links
         </h3>
         <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
           <div className="tp-footer-widget-content d-block d-md-flex justify-content-end">
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
          <div className="col-xl-6 col-lg-6 col-md-6">
           <div className="tp-footer-widget-content d-block d-md-flex justify-content-start">
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
            <a href="tel:923197167168">(092) 319 71 67 168</a>
            <br />
            <a href="tel:923264047334">(092) 326 40 47 334</a>
           </div>
          </div>
          <div className="tp-footer-widget-contact d-flex align-items-center mb-25">
           <div className="tp-footer-widget-contact-icon">
            <span>
             <i className="fa-solid fa-paper-plane"></i>
            </span>
           </div>
           <div className="tp-footer-widget-contact-content">
            <a href="https://maps.app.goo.gl/bbkj4ijSvsgvg2Pb9" target="_blank">
             Office # 20, Zone/C, 2 Floor, Innovista Technology Zone, DHA
             Business Hub, DHA Phase 8, Lahore.{' '}
            </a>
            <br />
           </div>
          </div>
          <div className="tp-footer-widget-contact d-flex align-items-center">
           <div className="tp-footer-widget-contact-icon">
            <span>
             <i className="fa-solid fa-envelope"></i>
            </span>
           </div>
           <div className="tp-footer-widget-contact-content">
            <a href="mailto:Support@vveba.com">Support@vveba.com</a>
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
         <p>© Vveba {new Date().getFullYear()} | All Rights Reserved</p>
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
