'use client';
import React, {useState} from 'react';
import {
 List,
 ListItem,
 ListItemButton,
 ListItemText,
 Tabs,
 Tab,
 Typography,
 Paper,
 Table,
 TableContainer,
 TableRow,
 Box,
} from '@mui/material';

import Image from 'next/image';

export default function TechStackJobs() {
 const [activeSidebarItem, setActiveSidebarItem] = useState('Web Development');
 const [activeTab, setActiveTab] = useState(0);

 // Data structure for sidebar items and their associated tab content
 const sidebarItems = {
  'Web Development': {
   color: 'linear-gradient(-90deg, #e10d19,rgb(232, 145, 149))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/web-rozee-1.png',
      imagePath2: '/assets/image/jobs/web-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/web-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/web-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/web-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/web-indeed-1.png',
     },
    };

    return {
     title: `Web Development in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Web Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'JavaScript Developer': {
   color: 'linear-gradient(-90deg, #6929C5,rgb(194, 173, 223))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/js-rozee-1.png',
      imagePath2: '/assets/image/jobs/js-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/js-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/js-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/js-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/js-indeed-1.png',
     },
    };

    return {
     title: `JavaScript Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About JavaScript Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },
  'Front-End Developer': {
   color: 'linear-gradient(-90deg, #2B5E5E,rgb(110, 187, 187))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/frontend-rozee-1.png',
      imagePath2: '/assets/image/jobs/frontend-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/frontend-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/frontend-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/frontend-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/frontend-indeed-1.png',
     },
    };

    return {
     title: `Front-End Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Front-End Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },
  'JAM-stack Developer': {
   color: 'linear-gradient(-90deg, #4B93E9,rgb(135, 179, 232))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/jamStack-rozee-1.png',
      imagePath2: '/assets/image/jobs/jamStack-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/jamStack-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/jamStack-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/jamStack-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/jamStack-indeed-1.png',
     },
    };

    return {
     title: `JAM-stack Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About JAM-stack Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'MERN-Stack Developer': {
   color: 'linear-gradient(-90deg, #9F1D53,rgb(206, 122, 157))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/mern-rozee-1.png',
      imagePath2: '/assets/image/jobs/mern-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/mern-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/mern-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/mern-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/mern-indeed-1.png',
     },
    };

    return {
     title: `MERN-Stack Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About MERN-Stack Developer ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },

  'Next.js Specialist': {
   color: 'linear-gradient(-90deg, #E74B54,rgb(225, 173, 176))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/next-rozee-1.png',
      imagePath2: '/assets/image/jobs/next-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/next-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/next-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/next-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/next-indeed-1.png',
     },
    };

    return {
     title: `Next.js Specialist in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Next.js Specialist ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'React Native Developer': {
   color: 'linear-gradient(-90deg, #520A09,rgb(183, 121, 120))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/reactN-rozee-1.png',
      imagePath2: '/assets/image/jobs/reactN-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/reactN-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/reactN-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/reactN-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/reactN-indeed-1.png',
     },
    };

    return {
     title: `React Native Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About React Native Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'DevOps Engineer': {
   color: 'linear-gradient(-90deg, #3B7F39,rgb(144, 200, 143))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/devOps-rozee-1.png',
      imagePath2: '/assets/image/jobs/devOps-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/devOps-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/devOps-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/devOps-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/devOps-indeed-1.png',
     },
    };

    return {
     title: `DevOps Engineer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About DevOps Engineer ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },

  'Salesforce Specialist': {
   color: 'linear-gradient(-90deg,rgb(107, 120, 198), #192D9D )',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/salesforce-rozee-1.png',
      imagePath2: '/assets/image/jobs/salesforce-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/salesforce-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/salesforce-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/salesforce-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/salesforce-indeed-1.png',
     },
    };

    return {
     title: `Salesforce Specialist in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Salesforce Specialist ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },
  'Microservices Developer': {
   color: 'linear-gradient(-90deg,rgb(218, 124, 215),rgb(226, 131, 175) )',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/microservices-rozee-1.png',
      imagePath2: '/assets/image/jobs/microservices-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/microservices-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/microservices-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/microservices-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/microservices-indeed-1.png',
     },
    };

    return {
     title: `Microservices Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Microservices Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Blockchain Developer': {
   color: 'linear-gradient(-90deg, #B2850D,rgb(232, 207, 139))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/blockchain-rozee-1.png',
      imagePath2: '/assets/image/jobs/blockchain-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/blockchain-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/blockchain-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/blockchain-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/blockchain-indeed-1.png',
     },
    };

    return {
     title: `Blockchain Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Blockchain Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Data Scientist': {
   color: 'linear-gradient(-90deg,rgb(182, 120, 93), #8A3814 )',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/dataScientist-rozee-1.png',
      imagePath2: '/assets/image/jobs/dataScientist-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/dataScientist-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/dataScientist-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/dataScientist-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/dataScientist-indeed-1.png',
     },
    };

    return {
     title: `Data Scientist in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Data Scientist ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Machine Learning Engineer': {
   color: 'linear-gradient(-90deg, #A66EFF,rgb(217, 193, 255))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/ml-rozee-1.png',
      imagePath2: '/assets/image/jobs/ml-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/ml-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/ml-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/ml-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/ml-indeed-1.png',
     },
    };

    return {
     title: `Machine Learning Engineer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Machine Learning Engineer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'AI Engineer': {
   color: 'linear-gradient(-90deg, #3B7D7A,rgb(158, 201, 199) )',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/ai-rozee-1.png',
      imagePath2: '/assets/image/jobs/ai-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/ai-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/ai-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/ai-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/ai-indeed-1.png',
     },
    };

    return {
     title: `AI Engineer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About AI Engineer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Certified Ethical Hacker (CEH v13)': {
   color: 'linear-gradient(-90deg,rgb(233, 185, 90),rgb(231, 156, 5) )',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/ceh-rozee-1.png',
      imagePath2: '/assets/image/jobs/ceh-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/ceh-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/ceh-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/ceh-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/ceh-indeed-1.png',
     },
    };
    return {
     title: `Certified Ethical Hacker (CEH v13) in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Certified Ethical Hacker (CEH v13) ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },
 };

 const handleSidebarItemClick = (item) => {
  setActiveSidebarItem(item);
  setActiveTab(0);
 };

 const handleTabChange = (event, newValue) => {
  setActiveTab(newValue);
 };

 return (
  <div className="container-fluid p-4 mb-80 sm:mb-60">
   <div className="tp-home-4-service-title text-center mt-60">
    <span className="tp-section-v_2-title-pre">Latest Insights</span>
    <h3 className="tp-section-title">Top Jobs market platforms</h3>
   </div>

   <div className="row g-3">
    {/* Sidebar Column - Bootstrap Grid */}
    <div className="col-md-3">
     <Paper elevation={2} className="p-2 h-100">
      <Typography variant="h6" className="mb-2 fw-bold">
       Tech Stacks
      </Typography>
      <List dense>
       {Object.keys(sidebarItems).map((item) => (
        <ListItem key={item} disablePadding>
         <ListItemButton
          selected={activeSidebarItem === item}
          onClick={() => handleSidebarItemClick(item)}
          sx={{
           borderRadius: 1,
           color: '#363f46',
           '&.Mui-selected': {
            backgroundColor: 'rgba(54, 63, 70, 0.5)',
            borderLeft: '4px solid #e92e3e',
            color: 'white !important',
            '&:hover': {
             backgroundColor: 'rgba(54, 63, 70, 0.8)', // Light on hover when selected
            },
           },
          }}
         >
          <ListItemText primary={item} />
         </ListItemButton>
        </ListItem>
       ))}
      </List>
     </Paper>
    </div>

    {/* Main Content Column - Bootstrap Grid */}
    <div className="col-md-9">
     <Paper elevation={1} className="p-0 h-100">
      {/* Tabs */}
      <Box className="mb-3">
       <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="country tabs"
        sx={{
         '& .MuiTab-root': {
          color: 'black',
          margin: '0 4px',
          borderRadius: '8px 8px 0 0',
         },
         '& .Mui-selected': {
          background: 'rgba(54, 63, 70, 0.5)', //  background for selected tab
          color: 'white !important',
         },
         '& .MuiTabs-indicator': {
          backgroundColor: ' #e92e3e', // Hide the default indicator
         },
         backgroundColor: 'rgba(54, 63, 70, 0.1)', //tabs nav background color
         padding: '7px 7px 0px 7px',
        }}
       >
        {sidebarItems[activeSidebarItem].tabs.map((tab, index) => (
         <Tab
          key={index}
          label={tab}
          id={`tab-${index}`}
          aria-controls={`tabpanel-${index}`}
          sx={{textTransform: 'none', fontWeight: 'bold'}}
         />
        ))}
       </Tabs>
      </Box>

      {/* Tab Content */}
      <div
       role="tabpanel"
       id={`tabpanel-${activeTab}`}
       aria-labelledby={`tab-${activeTab}`}
      >
       <Typography
        variant="h4"
        gutterBottom
        sx={{fontWeight: 'bold', marginBottom: '20px', marginLeft: '20px'}}
       >
        {
         sidebarItems[activeSidebarItem].content(
          sidebarItems[activeSidebarItem].tabs[activeTab]
         ).title
        }
       </Typography>

       <TableContainer component={Paper} elevation={2}>
        <Table aria-label="tech stack metrics">
         <Box className="p-4">
          {sidebarItems[activeSidebarItem]
           .content(sidebarItems[activeSidebarItem].tabs[activeTab])
           .data.map((row, index) => (
            <TableRow key={index} sx={{display: 'block', mb: 4}}>
             {row.shortDescription && (
              <Typography className="mb-4">{row.shortDescription}</Typography>
             )}
             {/* {row.heading && <h3>{row.heading}</h3>} */}
             <div className="row">
              {row.image1 && (
               <div className={row.image2 ? `col-md-6` : `col-md-12`}>
                <Image
                 loading="lazy"
                 src={row.image1}
                 alt="Freelance Guru"
                 width={1000}
                 height={300}
                 className="mb-4"
                />
               </div>
              )}
              {row.image2 && (
               <div className="col-md-6">
                <Image
                 loading="lazy"
                 src={row.image2}
                 alt="Freelance Guru"
                 width={600}
                 height={300}
                />
               </div>
              )}
             </div>
            </TableRow>
           ))}
         </Box>
        </Table>
       </TableContainer>
      </div>
     </Paper>
    </div>
   </div>
  </div>
 );
}
