import React, {useState} from 'react';
import {
 Dialog,
 DialogContent,
 DialogContentText,
 DialogActions,
 Avatar,
 Typography,
 Stack,
 IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
 RiMenu4Line,
} from 'react-icons/ri';

export const HomeAreaService = () => {
 const cards = [
  {
   id: 1,
   name: 'CEH v13',
   profession: 'Certified Ethical Hacker',
   shortDescription:
    'CEH v13 teaches how to detect and fix cyber threats using real-world tools, labs, and updated modules.',
   description:
    'Certified Ethical Hacker (CEH) v13 is the latest version of the globally recognized cybersecurity certification offered by EC-Council. It equips individuals with advanced knowledge and tools to identify vulnerabilities and secure systems against malicious hackers. CEH v13 includes updated modules on malware analysis, cloud security, IoT threats, and ransomware defense. With a strong focus on hands-on labs and real-world scenarios, it ensures practical skill development. The certification is ideal for cybersecurity professionals, network defenders, and ethical hackers aiming to enhance their career. CEH v13 meets industry standards and helps organizations protect critical data and infrastructures from emerging cyber threats.',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/01.jpg',
   icon: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/icon-4.jpg',
  },
  {
   id: 2,
   name: 'EDU-1202',
   profession: 'Spring Professional',
   shortDescription:
    'Spring EDU‑1202 certifies skills in Spring Boot, covering REST, JDBC, security, and real-world configs.',
   description:
    'The VMware Spring Professional exam (EDU‑1202) validates in‑depth expertise with the Spring Framework and Spring Boot. It covers core areas such as configuration, component scanning, Aspect‑Oriented Programming, database access using JDBC/JPA and transaction management, REST API development, security, auto‑configuration, observability with the Actuator, and testing. The exam consists of approximately 50 multiple-choice questions to be completed in 90 minutes, with a passing score typically around 76%. Originally launched for Spring 5, it is known as one of the most challenging Java certifications, intended for developers with hands-on Spring Boot experience',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/02.jpg',
   icon: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/icon-3.jpg',
  },
  {
   id: 3,
   name: 'Salesforce',
   profession: 'Advanced Administrator',
   shortDescription:
    'Validates Salesforce admin skills in automation, security, reports, and deployment for career growth.',
   description:
    'The Salesforce Certified Advanced Administrator exam is designed for experienced professionals seeking to validate a deeper understanding of advanced features in Salesforce, including complex security models, automation, custom objects, advanced reporting, and service cloud applications. The exam includes 60 multiple-choice questions to be completed in 105 minutes, with a passing score of 65%. Key focus areas include process automation, data management, analytics, and deployment strategies. It is ideal for administrators with over a year of hands-on experience looking to enhance their skills and career prospects by demonstrating expertise in managing and optimizing Salesforce environments.',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/03.jpg',
   icon: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/icon-2.jpg',
  },
  {
   id: 4,
   name: 'AWS Certified',
   profession: 'DevOps Engineer',
   shortDescription:
    'AWS DevOps cert tests skills in CI/CD, automation, security, and cloud ops for expert-level engineers.',
   description:
    'The AWS Certified DevOps Engineer – Professional exam is a challenging, scenario-based certification designed for IT professionals with advanced AWS and DevOps experience. It consists of 75 multiple-choice and multiple-answer questions to be completed in 180 minutes, with a passing score of 750 out of 1,000. The exam covers six key domains: SDLC automation, infrastructure as code, resilient cloud solutions, monitoring and logging, incident response, and security and compliance. Candidates should have at least two years of hands-on experience with AWS, scripting skills, and knowledge of tools like CI/CD pipelines, CloudFormation, IAM, and auto-scaling. This certification validates expert-level AWS DevOps proficiency.',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/04.jpg',
   icon: 'https://vveba.s3.eu-north-1.amazonaws.com/certifications/icon-1.jpg',
  },
 ];

 const [open, setOpen] = useState(false);
 const [selectedCard, setSelectedCard] = useState(null);

 const handleOpen = (card) => {
  setSelectedCard(card);
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
  setSelectedCard(null);
 };

 return (
  <>
   <div className="card">
    <div className="tp-home-4-service-title text-center mt-100">
     <span className="tp-section-v_2-title-pre" style={{color: ' #ffffff'}}>
      Latest Insights
     </span>
     <h3 className="tp-section-title mb-0">Top Tier Certifications</h3>
    </div>

    <div
     className="card__container containerCard"
     style={{margin: '100px 25px'}}
    >
     {cards.map((card) => (
      <article
       key={card.id}
       className={`card__article card-yellow wow fadeInUp`}
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
        {/* <RiMenu4Line /> */}
        <i class="fa-solid fa-bars"></i>
       </div>

       <div className="info">
        <div className="info__data">
         <h2 className="info__name">{card.name}</h2>
         <p className="info__description" style={{color: '#fff'}}>
          {card.shortDescription}
         </p>
         <button onClick={() => handleOpen(card)} className="info__button">
          READ MORE
         </button>
        </div>

        <div className="info__social">
         <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="info__link"
         >
          <i className="fab fa-facebook-f"></i>
         </a>
         <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="info__link"
         >
          <i className="fa-brands fa-instagram"></i>
         </a>
         <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="info__link"
         >
          <i className="fab fa-twitter"></i>
         </a>
        </div>
       </div>
      </article>
     ))}
    </div>
   </div>

   {/* MUI Dialog */}
   <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
    {/* <DialogTitle>About {selectedCard?.name}</DialogTitle> */}
    <DialogContent>
     <Stack spacing={2} direction="row" alignItems="center">
      <Avatar
       src={selectedCard?.icon}
       alt={selectedCard?.name}
       sx={{width: 56, height: 56, marginTop: '10px'}}
      />
      <div>
       <Typography variant="h6">{selectedCard?.name}</Typography>
       <Typography variant="subtitle2" color="text.secondary">
        {selectedCard?.profession}
       </Typography>
      </div>
     </Stack>
     <DialogContentText sx={{mt: 2}}>
      {selectedCard?.description}
     </DialogContentText>
    </DialogContent>
    <DialogActions>
     <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={{
       position: 'absolute',
       right: 8,
       top: 8,
       color: (theme) => theme.palette.grey[900],
       zIndex: 1,
      }}
     >
      <CloseIcon />
     </IconButton>
    </DialogActions>
   </Dialog>
  </>
 );
};
