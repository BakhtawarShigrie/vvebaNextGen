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
      <div class="fw-bold fs-3 pb-5">14</div>
      <div className="about-pb">Tech Stacks</div>
     </div>
     <div class="col-sm-12 col-md-3 col-lg-3 about-icons-boder">
      <div class="fw-bold fs-3 pb-5">4</div>
      <div className="about-pb">Certifications</div>
     </div>
     <div class="col-sm-12 col-md-3 col-lg-3 about-icons-boder">
      <div class="fw-bold fs-3 pb-5">10,000</div>
      <div className="about-pb">Hours</div>
     </div>
     <div class="col-sm-12 col-md-3 col-lg-3">
      <div class="fw-bold fs-3 pb-5">7</div>
      <div className="about-pb">Years</div>
     </div>
    </div>
   </div>

   <div className="container">
    {/* Top Row with Chairmen */}
    <div className="row text-center mb-5 ">
     <div className="col-md-6 mb-sm-50">
      <div className=" mr-40 sm-mr">
       <div style={{clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 77%)'}}>
        <Image
         src="https://vveba.s3.eu-north-1.amazonaws.com/about/muhammad-sharif.jpg"
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
         src="https://vveba.s3.eu-north-1.amazonaws.com/about/shahid-khalid.jpg"
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
   <center>
    <div class="fw-bold fs-4 pb-40 pt-60 ">
     <h2>Team Vveba</h2>
    </div>
   </center>
   {/* data */}
   <div className="container py-5">
    <div className="row">
     {teamMembers.map((member, index) => (
      <div key={index} className="col-md-4 col-lg-3 mb-70">
       <div className=" text-center align-items-center">
        <Image
         src={member.img}
         alt={member.name}
         width={200}
         height={200}
                     className="rounded mx-auto d-block"
                     loading='lazy'
        />
        <div className="card-body">
         <h5 className="card-title">{member.name}</h5>
         <p className="card-text">{member.role}</p>
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

