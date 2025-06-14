/*


'use client';
import React, {useState} from 'react';
import {Tabs, Tab, Box, Typography, Paper} from '@mui/material';

export default function PayScale() {
 const [activeTab, setActiveTab] = useState(0);

 const tabData = [
  {
   id: 'pakistan',
   name: 'Pakistan',
   content: (
    <div>
     <h2>Pakistan Information</h2>
     <p>
      Pakistan is a country in South Asia with a population of over 220 million
      people.
     </p>
     <p>Capital: Islamabad</p>
     <p>Official Languages: Urdu, English</p>
    </div>
   ),
  },
  {
   id: 'india',
   name: 'India',
   content: (
    <div>
     <h2>India Information</h2>
     <p>
      India is a country in South Asia with a population of over 1.4 billion
      people.
     </p>
     <p>Capital: New Delhi</p>
     <p>Official Languages: Hindi, English</p>
    </div>
   ),
  },
  {
   id: 'bangladesh',
   name: 'Bangladesh',
   content: (
    <div>
     <h2>Bangladesh Information</h2>
     <p>
      Bangladesh is a country in South Asia with a population of over 160
      million people.
     </p>
     <p>Capital: Dhaka</p>
     <p>Official Language: Bengali</p>
    </div>
   ),
  },
  {
   id: 'usa',
   name: 'USA',
   content: (
    <div>
     <h2>USA Information</h2>
     <p>
      The United States of America is a country in North America with a
      population of over 330 million people.
     </p>
     <p>Capital: Washington, D.C.</p>
     <p>Official Language: None at federal level (English de facto)</p>
    </div>
   ),
  },
 ];

 const handleChange = (event, newValue) => {
  setActiveTab(newValue);
 };

 function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
   <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
   >
    {value === index && (
     <Box sx={{p: 3}}>
      <Typography>{children}</Typography>
     </Box>
    )}
   </div>
  );
 }

    return (
     <>
      <div className="tp-home-4-service-title text-center mt-60">
       <span className="tp-section-v_2-title-pre">Latest Insights</span>
       <h3 className="tp-section-title">
        Globel Pay Scale 
       </h3>
      </div>

      <Box sx={{width: '100%'}}>
       <Paper elevation={3} sx={{p: 2}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
         <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="country tabs"
          variant="fullWidth"
         >
          {tabData.map((tab, index) => (
           <Tab
            key={tab.id}
            label={tab.name}
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
           />
          ))}
         </Tabs>
        </Box>

        {tabData.map((tab, index) => (
         <TabPanel key={tab.id} value={activeTab} index={index}>
          {tab.content}
         </TabPanel>
        ))}
       </Paper>
      </Box>
     </>
    );
}


*/ 