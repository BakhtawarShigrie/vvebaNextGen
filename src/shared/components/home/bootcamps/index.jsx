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

export default function BootcampsStacks() {
 const [activeSidebarItem, setActiveSidebarItem] = useState('Actualize');
 const [activeTab, setActiveTab] = useState(0);

 // Data structure for sidebar items and their associated tab content

 const sidebarItems = {
  Actualize: {
   color: 'linear-gradient(-90deg, #e10d19,rgb(232, 145, 149))',
   tabs: ['AI Engineer'],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'AI Engineer': {
      imagePath1: '/assets/image/bootcamps/ai-actualize-1.png',
      imagePath2: '/assets/image/bootcamps/ai-actualize-2.png',
      imagePath3: '/assets/image/bootcamps/ai-actualize-3.png',
     },
    };

    return {
     title: `Actualize in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Actualize ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
       image3: platformData[platform].imagePath3,
      },
     ],
    };
   },
  },

  'App Academy': {
   color: 'linear-gradient(-90deg, #6929C5,rgb(194, 173, 223))',
   tabs: ['AI Engineer', 'Full Stack'],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'AI Engineer': {
      imagePath1: '/assets/image/bootcamps/ai-appAcademy-1.png',
      imagePath2: '/assets/image/bootcamps/ai-appAcademy-2.png',
     },
     'Full Stack': {
      imagePath1: '/assets/image/bootcamps/fullStack-appAcademy-1.png',
      imagePath2: '/assets/image/bootcamps/fullStack-appAcademy-2.png',
     },
    };

    return {
     title: `App Academy in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About App Academy ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Career Karma': {
   color: 'linear-gradient(-90deg, #2B5E5E,rgb(110, 187, 187))',
   tabs: [
    'Data Analytics',
    'Front-End Development',
    'Full-Stack Development',
    'Full-Stack Software Engineer',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'Data Analytics': {
      imagePath1: '/assets/image/bootcamps/dataAnalytics-careerKarma-1.png',
     },
     'Front-End Development': {
      imagePath1: '/assets/image/bootcamps/frontend-careerKarma-1.png',
     },
     'Full-Stack Development': {
      imagePath1: '/assets/image/bootcamps/fullStackDev-careerKarma-1.png',
     },
     'Full-Stack Software Engineer': {
      imagePath1: '/assets/image/bootcamps/fullStackSoft-careerKarma-1.png',
     },
    };

    return {
     title: `Career Karma in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Career Karma ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },
  'Code Fellows': {
   color: 'linear-gradient(-90deg, #4B93E9,rgb(135, 179, 232))',
   tabs: [
    'Cybersecurity Engineer',
    'Software Development in Python',
    'Software Development in ASP.net',
    'Networking',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'Cybersecurity Engineer': {
      imagePath1: '/assets/image/bootcamps/cybersecurity-codeFellows-1.png',
      imagePath2: '/assets/image/bootcamps/cybersecurity-codeFellows-2.png',
     },
     'Software Development in Python': {
      imagePath1: '/assets/image/bootcamps/soft-dev-py-codeFellows-1.png',
      imagePath2: '/assets/image/bootcamps/soft-dev-py-codeFellows-2.png',
     },
     'Software Development in ASP.net': {
      imagePath1: '/assets/image/bootcamps/soft-dev-asp.Net-codeFellows-1.png',
      imagePath2: '/assets/image/bootcamps/soft-dev-asp.Net-codeFellows-2.png',
     },
     Networking: {
      imagePath1: '/assets/image/bootcamps/networking-codeFellows-1.png',
      imagePath2: '/assets/image/bootcamps/networking-codeFellows-2.png',
     },
    };

    return {
     title: `Code Fellows in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Code Fellows ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },

  'Code Platoon': {
   color: 'linear-gradient(-90deg, #9F1D53,rgb(206, 122, 157))',
   tabs: ['Dev Ops Engineer', 'Full-Stack Software Engineer'],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'Dev Ops Engineer': {
      imagePath1: '/assets/image/bootcamps/devOps-codePlatoon-1.png',
      imagePath2: '/assets/image/bootcamps/devOps-codePlatoon-2.png',
     },
     'Full-Stack Software Engineer': {
      imagePath1: '/assets/image/bootcamps/fullStack-codePlatoon-1.png',
      imagePath2: '/assets/image/bootcamps/fullStack-codePlatoon-2.png',
     },
    };

    return {
     title: `Code Platoon in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Code Platoon ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },

  'Code Smith': {
   color: 'linear-gradient(-90deg, #E74B54,rgb(225, 173, 176))',
   tabs: [
    'AI & ML Technical',
    'Software Engineer + AI/ML',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'AI & ML Technical': {
      imagePath1: '/assets/image/bootcamps/ai-ml-codeSmith-1.png',
      imagePath2: '/assets/image/bootcamps/ai-ml-codeSmith-2.png',
     },
     'Software Engineer + AI/ML': {
      imagePath1: '/assets/image/bootcamps/soft-ai-ml-codeSmith-1.png',
      imagePath2: '/assets/image/bootcamps/soft-ai-ml-codeSmith-2.png',
     },
    };

    return {
     title: `Code Smith in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Code Smith ',
       image1: platformData[platform].imagePath1, 
       image2: platformData[platform].imagePath2, 
      },
     ],
    };
   },
  },

  'Full Stack Academy': {
   color: 'linear-gradient(-90deg, #520A09,rgb(183, 121, 120))',
   tabs: ['AI & Machine Learning', 'Cybersecurity Analytics', 'Data Analytics'],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'AI & Machine Learning': {
      imagePath1: '/assets/image/bootcamps/ai-ml-fullStackAcademy-1.png',
      imagePath2: '/assets/image/bootcamps/ai-ml-fullStackAcademy-2.png',
     },
     'Cybersecurity Analytics': {
      imagePath1:
       '/assets/image/bootcamps/cybersecurity-fullStackAcademy-1.png',
      imagePath2:
       '/assets/image/bootcamps/cybersecurity-fullStackAcademy-2.png',
     },
     'Data Analytics': {
      imagePath1:
       '/assets/image/bootcamps/dataAnalytics-fullStackAcademy-1.png',
      imagePath2:
       '/assets/image/bootcamps/dataAnalytics-fullStackAcademy-2.png',
     },
    };

    return {
     title: `Full Stack Academy in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Full Stack Academy ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'General Assembly': {
   color: 'linear-gradient(-90deg, #3B7F39,rgb(144, 200, 143))',
   tabs: [
    'Data Analytics',
    'Data Science',
    'Information Technology',
    'Software Engineer',
    'UX Design',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'Data Analytics': {
      imagePath1: '/assets/image/bootcamps/dataAnalytics-generalAssembly-1.png',
      imagePath2: '/assets/image/bootcamps/dataAnalytics-generalAssembly-2.png',
     },
     'Data Science': {
      imagePath1: '/assets/image/bootcamps/dataScience-generalAssembly-1.png',
      imagePath2: '/assets/image/bootcamps/dataScience-generalAssembly-2.png',
     },
     'Information Technology': {
      imagePath1: '/assets/image/bootcamps/it-generalAssembly-1.png',
      imagePath2: '/assets/image/bootcamps/it-generalAssembly-2.png',
     },
     'Software Engineer': {
      imagePath1: '/assets/image/bootcamps/softEng-generalAssembly-1.png',
      imagePath2: '/assets/image/bootcamps/softEng-generalAssembly-2.png',
     },
     'UX Design': {
      imagePath1: '/assets/image/bootcamps/ux-generalAssembly-1.png',
      imagePath2: '/assets/image/bootcamps/ux-generalAssembly-2.png',
     },
    };

    return {
     title: `General Assembly in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About General Assembly',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },

  'Iron Hack': {
   color: 'linear-gradient(-90deg,rgb(107, 120, 198), #192D9D )',
   tabs: ['AI Engineer', 'Data Science & ML', 'Dev Ops', 'Web Development'],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'AI Engineer': {
      imagePath1: '/assets/image/bootcamps/ai-ironHack-1.png',
      imagePath2: '/assets/image/bootcamps/ai-ironHack-2.png',
     },
     'Data Science & ML': {
      imagePath1: '/assets/image/bootcamps/dataScience-ml-ironHack-1.png',
      imagePath2: '/assets/image/bootcamps/dataScience-ml-ironHack-2.png',
     },
     'Dev Ops': {
      imagePath1: '/assets/image/bootcamps/devOps-ironHack-1.png',
      imagePath2: '/assets/image/bootcamps/devOps-ironHack-2.png',
     },
     'Web Development': {
      imagePath1: '/assets/image/bootcamps/webDev-ironHack-1.png',
      imagePath2: '/assets/image/bootcamps/webDev-ironHack-2.png',
     },
    };

    return {
     title: `Iron Hack in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Iron Hack ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },
  'Juno College': {
   color: 'linear-gradient(-90deg,rgb(218, 124, 215),rgb(226, 131, 175) )',
   tabs: ['Web Development'],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'Web Development': {
      imagePath1: '/assets/image/bootcamps/webDev-junoCollege-1.png',
      imagePath2: '/assets/image/bootcamps/webDev-junoCollege-2.png',
     },
    };

    return {
     title: `Juno College in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Juno College ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Noble Desktop': {
   color: 'linear-gradient(-90deg, #B2850D,rgb(232, 207, 139))',
   tabs: [
    'Data Science',
    'Front-End Development',
    'Full-Stack Development',
    'Jam-Stack Development',
    'Python Development',
    'Software Engineering',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'Data Science': {
      imagePath1: '/assets/image/bootcamps/dataScience-ai-nobleDesktop-1.png',
      imagePath2: '/assets/image/bootcamps/dataScience-ai-nobleDesktop-2.png',
     },
     'Front-End Development': {
      imagePath1: '/assets/image/bootcamps/frontend-nobleDesktop-1.png',
      imagePath2: '/assets/image/bootcamps/frontend-nobleDesktop-2.png',
     },
     'Full-Stack Development': {
      imagePath1: '/assets/image/bootcamps/fullStack-nobleDesktop-1.png',
      imagePath2: '/assets/image/bootcamps/fullStack-nobleDesktop-2.png',
     },
     'Jam-Stack Development': {
      imagePath1: '/assets/image/bootcamps/jamStack-nobleDesktop-1.png',
      imagePath2: '/assets/image/bootcamps/jamStack-nobleDesktop-2.png',
     },
     'Software Engineering': {
      imagePath1: '/assets/image/bootcamps/softEng-nobleDesktop-1.png',
      imagePath2: '/assets/image/bootcamps/softEng-nobleDesktop-2.png',
     },
     'Python Development': {
      imagePath1: '/assets/image/bootcamps/py-nobleDesktop-1.png',
      imagePath2: '/assets/image/bootcamps/py-nobleDesktop-2.png',
     },
    };

    return {
     title: `Noble Desktop in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Noble Desktop',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Digital Crafts': {
   color: 'linear-gradient(-90deg,rgb(182, 120, 93), #8A3814 )',
   tabs: ['AI & ML Engineer', 'Cybersecurity', 'Software Development'],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'AI & ML Engineer': {
      imagePath1: '/assets/image/bootcamps/ai-digitalCrafts-1.png',
      imagePath2: '/assets/image/bootcamps/ai-digitalCrafts-2.png',
     },
     Cybersecurity: {
      imagePath1: '/assets/image/bootcamps/cybersecurity-digitalCrafts-1.png',
      imagePath2: '/assets/image/bootcamps/cybersecurity-digitalCrafts-2.png',
     },
     'Software Development': {
      imagePath1: '/assets/image/bootcamps/softDev-digitalCrafts-1.png',
      imagePath2: '/assets/image/bootcamps/softDev-digitalCrafts-2.png',
     },
    };

    return {
     title: `Digital Crafts in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Digital Crafts ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Rithm School': {
   color: 'linear-gradient(-90deg, #A66EFF,rgb(217, 193, 255))',
   tabs: ['Web Development'],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'Web Development': {
      imagePath1: '/assets/image/bootcamps/webDev-rithmSchool-1.png',
      imagePath2: '/assets/image/bootcamps/webDev-rithmSchool-2.png',
     },
    };

    return {
     title: `Rithm School in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Rithm School ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'The Software Guild': {
   color: 'linear-gradient(-90deg, #3B7D7A,rgb(158, 201, 199) )',
   tabs: ['Java Software Engineer', '.Net/C# Software Engineer'],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'Java Software Engineer': {
      imagePath1: '/assets/image/bootcamps/java-theSoftwareGuild-1.png',
      imagePath2: '/assets/image/bootcamps/java-theSoftwareGuild-2.png',
     },
     '.Net/C# Software Engineer': {
      imagePath1: '/assets/image/bootcamps/dotNet-theSoftwareGuild-1.png',
      imagePath2: '/assets/image/bootcamps/dotNet-theSoftwareGuild-2.png',
     },
    };

    return {
     title: `The Software Guild in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About The Software Guild ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  Thinkful: {
   color: 'linear-gradient(-90deg,rgb(233, 185, 90),rgb(231, 156, 5) )',
   tabs: [
    'Data Analytics',
    'Data Science',
    'Software Engineering',
    'UI/UX Design',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'Data Analytics': {
      imagePath1: '/assets/image/bootcamps/dataAnalytics-thinkfull-1.png',
      imagePath2: '/assets/image/bootcamps/course-common-thinkfull-2.png',
     },
     'Data Science': {
      imagePath1: '/assets/image/bootcamps/dataScience-thinkfull-1.png',
      imagePath2: '/assets/image/bootcamps/course-common-thinkfull-2.png',
     },
     'Software Engineering': {
      imagePath1: '/assets/image/bootcamps/softEng-thinkfull-1.png',
      imagePath2: '/assets/image/bootcamps/course-common-thinkfull-2.png',
     },
     'UI/UX Design': {
      imagePath1: '/assets/image/bootcamps/ui-thinkfull-1.png',
      imagePath2: '/assets/image/bootcamps/course-common-thinkfull-2.png',
     },
    };
    return {
     title: `Thinkful in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Thinkful ',
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
    <h3 className="tp-section-title">Top BootCamps Fee</h3>
   </div>

   <div className="row g-3">
    {/* Sidebar Column - Bootstrap Grid */}
    <div className="col-md-3">
     <Paper elevation={2} className="p-2 h-100">
      <Typography variant="h6" className="mb-2 fw-bold">
       Globel BootCamps
      </Typography>
      <List dense>
       {Object.keys(sidebarItems).map((item) => (
        <ListItem key={item} disablePadding>
         <ListItemButton
          selected={activeSidebarItem === item}
          onClick={() => handleSidebarItemClick(item)}
          sx={{
           borderRadius: 1,
           '&.Mui-selected': {
            background: sidebarItems[item]?.color || sidebarItems.color,
            borderLeft: '4px solid #701DF0',
            color: 'white !important',
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
     <Paper elevation={3} className="p-2 h-100">
      {/* Tabs */}
      <Box sx={{borderBottom: 1, borderColor: 'divider'}} className="mb-3">
       <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="country tabs"
        sx={{
         '& .MuiTab-root': {
          margin: '0 4px',
          borderRadius: '8px 8px 0 0',
         },
         '& .Mui-selected': {
          background:
           sidebarItems[activeSidebarItem]?.color || sidebarItems.color,
          color: 'white !important',
         },
         '& .MuiTabs-indicator': {
          backgroundColor: '#701DF0',
         },
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
       <Typography variant="h5" gutterBottom className="mb-3">
        {
         sidebarItems[activeSidebarItem].content(
          sidebarItems[activeSidebarItem].tabs[activeTab]
         ).title
        }
       </Typography>

       <TableContainer component={Paper} elevation={2}>
        <Table aria-label="tech stack metrics">
         <Box className="p-2">
          {sidebarItems[activeSidebarItem]
           .content(sidebarItems[activeSidebarItem].tabs[activeTab])
           .data.map((row, index) => (
            <TableRow key={index} sx={{display: 'block', mb: 4}}>
             {row.shortDescription && (
              <Typography className="mb-4">{row.shortDescription}</Typography>
             )}
             {/* {row.heading && <h3>{row.heading}</h3>} */}
             {row.image1 && (
              <Image
               loading="lazy"
               src={row.image1}
               alt="Freelance Guru"
               width={1000}
               height={300}
               className="mb-4"
              />
             )}
             {row.image2 && (
              <Image
               loading="lazy"
               src={row.image2}
               alt="Freelance Guru"
               width={1000}
               height={300}
              />
             )}
             {row.image3 && (
              <Image
               loading="lazy"
               src={row.image3}
               alt="Freelance Guru"
               width={1000}
               height={300}
              />
             )}
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
