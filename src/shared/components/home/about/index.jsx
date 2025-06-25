import Link from "next/link";

export const HomeAreaAbout = () => {
  return (
   <section
    className="tp-about-parallax"
    style={{
     backgroundImage: "url('/assets/img/hero/home-2/hero-2.jpg')",
     backgroundAttachment: 'fixed',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     position: 'relative',
     zIndex: 1,
     padding: '100px 0',
     height: '100%',
    }}
   >
    {/* Overlay for better text readability */}
    <div
     style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: -1,
     }}
    ></div>

    <div className="container">
     <div className="row justify-content-center">
      <div className="col-xl-9 col-sm-12">
       <div className="tp-about-4-wrapper" style={{color: '#fff'}}>
        <div
         className="tp-about-4-title-wrapper text-center wow fadeInDown"
         data-wow-duration="1s"
         data-wow-delay=".3s"
        >
         <span className="tp-section-v_2-title-pre">ABOUT US</span>
         <h3 className="tp-section-title">
          Providing advanced tech <br />
          solutions for startups and <br /> diverse enterprises.
         </h3>
        </div>
        <p
         className="wow fadeInDown text-center"
         data-wow-duration="1s"
         data-wow-delay=".5s"
        >
         With a focus on innovation and efficiency, we tailor our services to
         meet the specific needs and challenges of each client, ensuring
         seamless integration and maximum impact.
        </p>
        <div
         className="tp-about-quote text-center mt-50 wow fadeInDown"
         data-wow-duration="1s"
         data-wow-delay=".7s"
        >
         <h4 className="tp-about-quote-title">
          {' '}
          Turning ideas into tangible digital realities{' '}
         </h4>
        </div>
        <div className="tp-about-4-cta d-flex justify-content-center mt-60 mb-10 align-items-center align-items-sm-start">
         <div className="tp-hero-btn mr-30 hero-btn-4">
          <Link className="tp-btn" href="about">
           discover more{' '}
          </Link>
         </div>
         <div className="tp-hero-about-4-cta-info">
          <div className="tp-hero-about-4-cta-icon">
           <i className="fal fa-phone" style={{color: '#e92e3e'}}></i>
          </div>

          <div className="tp-hero-about-4-cta-contact pl-15">
           <a href="tel:0923041699991" style={{color: '#fff'}}>
            <span>Call for help</span>
            <h4 style={{color: '#fff'}}>092 304 1699991</h4>
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