import React from 'react';
import {
 RiMenu4Line,
 RiFacebookCircleLine,
 RiInstagramLine,
 RiTwitterXLine,
} from 'react-icons/ri';

export const HomeAreaService = () => {
 const cards = [
  {
   id: 1,
   name: 'JINX',
   profession: 'Frontend Developer',
   color: 'yellow',
   description:
    'Frontend developer, I create web pages with UI/UX user interface,',
   image:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
   id: 2,
   name: 'YAIK',
   profession: 'Web Designer',
   color: 'green',
   description:
    'Web designer with a focus on creating beautiful and functional interfaces.',
   image:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
   id: 3,
   name: 'XIMA',
   profession: 'Data Analytics',
   color: 'pink',
   description:
    'Data analyst with expertise in transforming complex data into actionable insights.',
   image:
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
   id: 4,
   name: 'LINA',
   profession: 'UX Researcher',
   color: 'blue',
   description:
    'UX researcher passionate about understanding user behavior and needs. ',
   image:
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
 ];

  return (
   <>
    <div className="tp-home-4-service-title text-center mt-60">
     <span className="tp-section-v_2-title-pre">Latest Insights</span>
     <h3 className="tp-section-title">Top Services</h3>
    </div>

    <section className="card">
     <img src={'assets/img/img-bg.png'} alt={'image'} className="card__bg" />
     <div class="card__blur"></div>

     <div
      className="card__container containerCard"
      style={{margin: '100px 25px'}}
     >
      {cards.map((card) => (
       <article
        key={card.id}
        className={`card__article card-${card.color} wow fadeInUp`}
        data-wow-duration={`.${card.id}s`}
        data-wow-delay={`.${card.id}s`}
       >
        <img src={card.image} alt={card.name} className="card__img" />
        <div className="card__shadow"></div>

        <div className="card__data">
         <h2 className="card__name">{card.name}</h2>
         <span className="card__profession">{card.profession}</span>
        </div>

        <div className="card__clip">
         <RiMenu4Line />
        </div>

        <div className="info">
         <div className="info__data">
          <h2 className="info__name">{card.name}</h2>
          <p className="info__description">{card.description}</p>
          <a href="#" className="info__button">
           Follow Me
          </a>
         </div>

         <div className="info__social">
          <a
           href="https://www.facebook.com/"
           target="_blank"
           rel="noopener noreferrer"
           className="info__link"
          >
           <RiFacebookCircleLine />
          </a>
          <a
           href="https://www.instagram.com/"
           target="_blank"
           rel="noopener noreferrer"
           className="info__link"
          >
           <RiInstagramLine />
          </a>
          <a
           href="https://twitter.com/"
           target="_blank"
           rel="noopener noreferrer"
           className="info__link"
          >
           <RiTwitterXLine />
          </a>
         </div>
        </div>
       </article>
      ))}
     </div>
    </section>
   </>
  );
};

//   return (
//     <section className="tp-home-4-service-area pb-40 p-relative">
//       <div
//         className="container tp-home-4-counter-area p-relative wow fadeInDown"
//         data-background="/assets/img/counter/home-4/counter-bg.png"
//         data-wow-duration="1s"
//         data-wow-delay=".3s"
//       >

//       </div>
//       <div
//         className="tp-home-4-service-section wow fadeInUp"
//         data-wow-duration="1s"
//         data-wow-delay=".3s"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-xxl-12">
//               <div className="tp-home-4-service-title text-center mb-60">
//                 <span className="tp-section-v_2-title-pre">
//                   Awesome Services
//                 </span>
//                 <h3 className="tp-section-title">
//                   Our Professional IT Solutions <br />
//                   and Services
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-xl-3 col-lg-4 col-md-6">
//               <div
//                 className="tp-home-4-service-item pt-45 pb-45 wow fadeInUp"
//                 data-wow-duration="1s"
//                 data-wow-delay=".5s"
//               >
//                 <div className="tp-home-4-service-icon mb-35 d-flex justify-content-center">
//                   <img
//                     src="/assets/svg/1.svg"
//                     style={{ width: "1000px", height: "100px" }}
//                     alt=""
//                   />
//                 </div>
//                 <div className="tp-home-4-service-item-text pl-30" >
//                   <h4>Web Apps Development</h4>
//                   <p className="pr-15">
//                     Enhance your online visibility with our web development
//                     offerings. SoftX delivers top-tier design for your business
//                     needs.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-3 col-lg-4 col-md-6">
//               <div
//                 className="tp-home-4-service-item pt-45 pb-45  tp-service-2 wow fadeInUp"
//                 data-wow-duration="1s"
//                 data-wow-delay=".7s"
//               >
//                 <div className="tp-home-4-service-icon mb-35 d-flex justify-content-center">
//                   <img
//                     src="/assets/svg/2.svg"
//                     style={{ width: "100px", height: "100px" }}
//                     alt=""
//                   />
//                 </div>
//                 <div className="tp-home-4-service-item-text pl-30">
//                   <h4>Mobile Apps Development</h4>
//                   <p className="pr-15">
//                     Elevate your mobile app above the competition with SoftX's
//                     bespoke mobile app solutions, designed to make your project
//                     truly distinctive.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-lg-4 col-md-6">
//               <div
//                 className="tp-home-4-service-item pt-45 pb-45  tp-service-3 wow fadeInUp"
//                 data-wow-duration="1s"
//                 data-wow-delay=".9s"
//               >
//                 <div className="tp-home-4-service-icon mb-35 d-flex justify-content-center">
//                   <img
//                     src="/assets/svg/3.svg"
//                     style={{ width: "100px", height: "100px" }}
//                     alt=""
//                   />
//                 </div>
//                 <div className="tp-home-4-service-item-text pl-30">
//                   <h4>Custom Software Development</h4>
//                   <p className="pr-15">
//                     Obtain tailor-made software perfectly attuned to your
//                     business objectives. Our solutions are crafted to enhance
//                     your productivity and streamline operations.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-3 col-lg-4 col-md-6">
//               <div
//                 className="tp-home-4-service-item pt-45 pb-45  tp-service-4 wow fadeInUp"
//                 data-wow-duration="1s"
//                 data-wow-delay="1.2s"
//               >
//                 <div className="tp-home-4-service-icon mb-35 d-flex justify-content-center">
//                   <img
//                     src="/assets/svg/4.svg"
//                     style={{ width: "100px", height: "100px" }}
//                     alt=""
//                   />
//                 </div>
//                 <div className="tp-home-4-service-item-text pl-30">
//                   <h4>
//                     Q/A and <br /> Testing
//                   </h4>
//                   <p className="pr-15">
//                     Enhance your software's reliability with SoftX's
//                     comprehensive QA testing services. Minimize bugs and
//                     accelerate your time to market.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-xxl-12 text-center">
//               <div className="tp-service-home-4-info-text mt-60">
//                 <p>
//                   You can also find our{' '}
//                   <a href="/services" target="_blank" rel="">
//                     {' '}
//                     Services{' '}
//                   </a>
//                   to contact for the IT consulting.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
