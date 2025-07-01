import Image from 'next/image';
import {teamMembers} from '@/shared/constants/teamdata';

export const About = () => {
 return (
  <section>
   <div className="text-left">
    <p
     className="pt-100 pb-50 tp-home-4-hero-text pl-120 pr-120 sm-pl sm-pr"
     style={{textAlign: 'justify'}}
    >
     VVEBA Pvt Ltd is a career-focused tech bootcamp platform that transforms
     passionate learners into skilled professionals ready for the global digital
     economy. We focus on real-world learning, offering a structured path that
     leads from education to income. With a strong emphasis on practical skills,
     mentorship, and results, VVEBA stands as a bridge between talent and
     opportunity. Our mission is to create opportunities, build talent, and
     shape the next generation of tech leaders from the ground up.
    </p>
   </div>

   {/* Profiles Section */}
   <div class="container mt-4 mb-50">
    <div class="row align-items-center">
     <div class="col-12 col-md-6">
      <div
       className="text-center mr-40 sm-mr"
       style={{backgroundColor: '#363f46'}}
      >
       <h5 className="py-2" style={{color: 'white', fontWeight: '500'}}>
        WHO WE ARE
       </h5>
      </div>
      <div className="mr-40 sm-mr">
       <p className="py-2" style={{textAlign: 'justify'}}>
        VVEBA Pvt Ltd is a tech bootcamp platform dedicated to helping students
        become skilled, job-ready professionals. We are a passionate team of
        developers, instructors, and mentors committed to delivering real-world,
        practical tech education that drives career growth.
       </p>
      </div>
     </div>
     <div class="col-12 col-md-6">
      <div
       className="text-center ml-40 sm-ml"
       style={{backgroundColor: '#363f46'}}
      >
       <h5 className="py-2" style={{color: 'white', fontWeight: '500'}}>
        WHAT WE DO
       </h5>
      </div>
      <div className="ml-40 sm-ml">
       <p className="py-2" style={{textAlign: 'justify'}}>
        VVEBA Pvt Ltd We provide hands-on training in 15 high-demand tech
        stacks, along with 4 global certifications. After 6 months of training
        and 2 months of profile projects building, students start earning
        through real world projects, and freelance work at our company.
       </p>
      </div>
     </div>

     {/* <div class="col-12 col-md-6 d-flex justify-content-center">
         <Image
          src="/assets/img/service/service-details/img-1.jpg"
          alt="Profile Image"
          width={600}
          height={500}
          className=" p-3"
         />
        </div>
        <div class="col-12 col-md-6">
         <h2>Syed Abdullah</h2>
         <p>
          Sarah Ahmad, a renowned Pakistani young entrepreneur – founder at
          Desol Int. and many other sister companies, currently running a
          software company in Lahore, Pakistan. Sarah was awarded as “Hero
          Microsoft Student Partner” in June 2016. She was one of the two people
          to receive this award in the Middle East & Africa region and the first
          ever girl from Pakistan to receive the honor. She was also entitled
          with Techjuice 25 under 25 emerging talent in 2017. Recently she was
          awarded the Laurels of Honors award by the Lahore Women Chamber of
          Commerce. Sarah is involved in many other ventures; she is a tech
          trainer and has made her presence as a Guest speaker in many
          organizations.
         </p>
        </div> */}
    </div>
   </div>

   <div className="container mb-50">
    <div className="row">
     <div className="col-md-5 mx-auto">
      <div
       className="text-center mr-40 sm-mr"
       style={{backgroundColor: '#e92e3e'}}
      >
       <h5 className="py-2" style={{color: 'white', fontWeight: '500'}}>
        ROAD TO $10,000
       </h5>
      </div>
     </div>
    </div>
   </div>

   <div class="container text-center shadow p-3   mb-100 bg-white rounded-4">
    <div class="row">
     <div class="col-sm-12 col-md-3 col-lg-3 about-icons-boder">
      {/* <img
       src="/assets/svg/stacks-tech-01.svg"
       className="mx-auto d-block mb-5"
       alt="Mission Icon"
       width="50"
       height="50"
      />{' '} */}
      <div class="fw-bold fs-3 pb-5">14</div>
      <div className="about-pb">Tech Stacks</div>
     </div>
     <div class="col-sm-12 col-md-3 col-lg-3 about-icons-boder">
      {/* <img
       src="/assets/svg/certificates-cropped.svg"
       className="mx-auto d-block mb-5"
       alt="Mission Icon"
       width="50"
       height="50"
      />{' '} */}
      <div class="fw-bold fs-3 pb-5">4</div>
      <div className="about-pb">Certifications</div>
     </div>
     <div class="col-sm-12 col-md-3 col-lg-3 about-icons-boder">
      {/* <img
       src="/assets/svg/hours-01.svg"
       className="mx-auto d-block mb-5"
       alt="Mission Icon"
       width="50"
       height="50"
      />{' '} */}
      <div class="fw-bold fs-3 pb-5">10,000</div>
      <div className="about-pb">Hours</div>
     </div>
     <div class="col-sm-12 col-md-3 col-lg-3">
      {/* <img
       src="/assets/svg/years-01.svg"
       className="mx-auto d-block mb-5"
       alt="Mission Icon"
       width="50"
       height="50"
      />{' '} */}
      <div class="fw-bold fs-3 pb-5">7</div>
      <div className="about-pb">Years</div>
     </div>
    </div>
   </div>

   <div className="container">
    {/* Top Row with Chairmen */}
    <div className="row text-center mb-5 ">
     <div className="col-md-6 ">
      <div className=" mr-40 sm-mr">
       <div style={{clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 77%)'}}>
        <Image
         src="/assets/Muhammad_Sharif.jpg"
         alt="Muhammad Sharif"
         width={500}
         height={350}
         loading="lazy"
         className="rounded mx-auto d-block"
        />
       </div>
       <div
        className="text-white py-2 mt-4 fw-bold"
        style={{backgroundColor: '#e92e3e', lineHeight: '20px'}}
       >
        Muhammad Sharif <br />
        <small>The Company Chairman</small>
       </div>
      </div>
     </div>
     <div className="col-md-6">
      <div className="ml-40 sm-ml">
       <div style={{clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 77%)'}}>
        <Image
         src="/assets/Shahid_Khalid.jpg"
         alt="Shahid Khalid"
         width={500}
         height={350}
         loading="lazy"
         className="rounded mx-auto d-block"
        />
       </div>
       <div
        className="text-white py-2 mt-4 fw-bold"
        style={{backgroundColor: '#e92e3e', lineHeight: '20px'}}
       >
        Shahid Khalid <br />
        <small>The Company Co-Chairman</small>
       </div>
      </div>
     </div>
    </div>

    {/* Mission and Vision */}
    <div className="row my-5">
     <div className="col-md-6">
      <div className="mr-40 sm-mr">
       <h4 className="text-danger fw-bold d-flex align-items-center gap-2">
        <img
         src="/assets/svg/mission-01.svg"
         className="mr-10"
         alt="Mission Icon"
         width="40"
         height="40"
        />{' '}
        MISSION
       </h4>
       <p className="text-secondary mt-3" style={{textAlign: 'justify'}}>
        We aim to bring $450 billion annually into Pakistan’s economy by tapping
        into global markets while staying within our own country. We train our
        youth in 15 highdemand tech stacks and offer 4 globally recognized
        certifications to equip them with cutting-edge digital skills. Our
        students learn to create fungible tokens, master cybersecurity, and
        build real-world projects. Instead of sending our talent abroad, we’ll
        establish a software house of our own to provide work opportunities and
        hands-on experience. Earnings begin at $200 and grow step by step —
        $500, $1,000, $1,500, and beyond — reaching up to $10,000/month. With
        every bootcamp, their skills improve and their income multiplies. Our
        vision is to transform Pakistan into a global tech hub by nurturing
        local talent and channeling it into the international digital economy.
       </p>
      </div>
     </div>
     <div className="col-md-6">
      <div className="ml-40 sm-ml">
       <h4 className="text-danger fw-bold d-flex align-items-center gap-2">
        <img
         src="/assets/svg/vision.svg"
         className="mr-10"
         alt="Vison Icon"
         width="40"
         height="40"
        />{' '}
        VISION
       </h4>
       <p className="text-secondary mt-3" style={{textAlign: 'justify'}}>
        We aim to bring $450 billion annually into Pakistan’s economy by tapping
        into global markets while staying within our own country. We train our
        youth in 15 highdemand tech stacks and offer 4 globally recognized
        certifications to equip them with cutting-edge digital skills. Our
        students learn to create fungible tokens, master cybersecurity, and
        build real-world projects. Instead of sending our talent abroad, we’ll
        establish a software house of our own to provide work opportunities and
        hands-on experience. Earnings begin at $200 and grow step by step —
        $500, $1,000, $1,500, and beyond — reaching up to $10,000/month. With
        every bootcamp, their skills improve and their income multiplies. Our
        vision is to transform Pakistan into a global tech hub by nurturing
        local talent and channeling it into the international digital economy.
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

