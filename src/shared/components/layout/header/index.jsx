'use client';
import {useState} from 'react';
import {
 Box,
 Button,
 IconButton,
 Drawer,
 List,
 ListItem,
 ListItemText,
 Popover,
 Typography,
 Grid,
 Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuth} from '@/app/context/AuthContext';
import Link from 'next/link';

export const Header = () => {
 const router = useRouter();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const {user, logout} = useAuth();
 const [anchorEl, setAnchorEl] = useState(null);

 const scrollToCourses = () => {
  if (window.location.pathname === '/') {
   const element = document.getElementById('courses-section');
   if (element) {
    element.scrollIntoView({behavior: 'smooth'});
   }
  } else {
   router.push('/#courses-section');
  }
 };

 const handleExploreClick = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleExploreClose = () => {
  setAnchorEl(null);
    };
    const handleCategoryClick = (link) => {
     handleExploreClose(); // Close the popover

     if (link.startsWith('#')) {
      // Scroll to in-page section
      const elementId = link.substring(1);
      const section = document.getElementById(elementId);
      if (section) {
       section.scrollIntoView({behavior: 'smooth'});
      }
     } else {
      router.push(link); // Navigate to another page
     }
    };
      

 const openExplore = Boolean(anchorEl);

 const menuItems = [
  {label: '$10,000 Confirmed', action: () => router.push('/')},
  {label: 'Global Recognition', action: scrollToCourses},
  {label: 'BootCamp Curriculum', action: () => router.push('/contact')},
  {label: 'Course Details', action: () => router.push('/contact')},
  {label: 'About Us', action: () => router.push('/about')},
 ];

 const exploreCategories = {
  Computers: [
   {label: 'Laptop', link: '/products/laptop'},
   {label: 'Desktop', link: '/products/desktop'},
   {label: 'Monitors', link: '/products/monitors'},
   {label: 'Accessories', link: '#accessories-section'}, // in-page section
   {label: 'Software', link: '/products/software'},
  ],
  Smartphone: [
   {label: 'Smartphones', link: '/products/smartphones'},
   {label: 'Compare', link: '#compare-smartphones'},
   {label: 'Airpods', link: '/products/airpods'},
   {label: 'Phone Cases', link: '/products/phone-cases'},
   {label: 'Chargers', link: '/products/chargers'},
  ],
  Tablets: [
   {label: 'Tablets', link: '/products/tablets'},
   {label: 'Compare', link: '#compare-tablets'},
   {label: 'Tablet Cases', link: '/products/tablet-cases'},
   {label: 'Chargers', link: '/products/tablet-chargers'},
  ],
  Music: [
   {label: 'Headphones', link: '/products/headphones'},
   {label: 'Earphones', link: '/products/earphones'},
   {label: 'Music Boxes', link: '#music-boxes-section'},
  ],
 };
  

 return (
  <header>
   <Box
    sx={{
     position: 'relative',
     width: '100%',
     backgroundColor: 'transparent',
     zIndex: 1000,
    }}
   >
    <Box
     sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: {xs: '10px', sm: '20px 90px 0 90px'},
     }}
    >
     <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Link href="/">
       <Box
        sx={{
         position: 'relative',
         width: {xs: 100, sm: 120},
         height: {xs: 50, sm: 70},
         width: '150px',
                 height: '100px',
         left: "10%"
        }}
       >
        <Image
         src="/assets/final_logo.png"
         alt="Logo"
         fill
         style={{objectFit: 'contain'}}
        />
       </Box>
      </Link>
     </Box>

     <Box
      sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center', gap: 3}}
     >
      {menuItems.map((item, index) => (
       <Button
        key={index}
        onClick={item.action}
        sx={{color: '#353e45', textTransform: 'none', fontWeight: 'bold'}}
       >
        {item.label}
       </Button>
      ))}

      <Button
       onClick={handleExploreClick}
       sx={{color: '#353e45', textTransform: 'none', fontWeight: 'bold'}}
      >
       Explore More
      </Button>

      <Popover
       open={openExplore}
       anchorEl={anchorEl}
       onClose={handleExploreClose}
       anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
       transformOrigin={{vertical: 'top', horizontal: 'right'}}
      >
       <Box sx={{p: 4, maxWidth: 800}}>
        <Grid container spacing={3}>
         {Object.entries(exploreCategories).map(([category, items]) => (
          <Grid item xs={12} sm={6} md={3} key={category}>
           <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {category}
           </Typography>
           <Stack spacing={1.5}>
            {items.map((item, i) => (
             <Box
              key={i}
              onClick={() => handleCategoryClick(item.link)}
              sx={{
               display: 'flex',
               alignItems: 'center',
               gap: 1,
               cursor: 'pointer',
               '&:hover': {textDecoration: 'underline'},
              }}
             >
              <Box
               component="span"
               sx={{
                width: 18,
                height: 18,
                backgroundColor: '#ccc',
                borderRadius: '4px',
               }}
              />
              <Typography variant="body2">{item.label}</Typography>
             </Box>
            ))}
           </Stack>
          </Grid>
         ))}
        </Grid>
       </Box>
      </Popover>

      {user ? (
       <Button
        onClick={logout}
        startIcon={<LogoutIcon />}
        variant="contained"
        style={{backgroundColor: '#e92e3e', boxShadow: 'none'}}
       >
        Logout
       </Button>
      ) : (
       <Button
        style={{backgroundColor: '#e92e3e', boxShadow: 'none'}}
        onClick={() => router.push('/login')}
        startIcon={<LoginIcon />}
        variant="contained"
       >
        Login
       </Button>
      )}
     </Box>

     <Box sx={{display: {xs: 'flex', md: 'none'}}}>
      <IconButton onClick={() => setMobileMenuOpen(true)}>
       <MenuIcon />
      </IconButton>
     </Box>
    </Box>
   </Box>

   <Drawer
    anchor="right"
    open={mobileMenuOpen}
    onClose={() => setMobileMenuOpen(false)}
   >
    <Box sx={{width: 250, padding: 2}}>
     <Box
      sx={{
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 2,
      }}
     >
      <a href="/">
       <Box sx={{position: 'relative', width: 50, height: 50}}>
        <Image
         src="/assets/logo.svg"
         alt="Logo"
         fill
         style={{objectFit: 'contain'}}
        />
       </Box>
      </a>
      <IconButton onClick={() => setMobileMenuOpen(false)}>
       <CloseIcon />
      </IconButton>
     </Box>

     <List>
      {menuItems.map((item, index) => (
       <ListItem
        button
        key={index}
        onClick={() => {
         item.action();
         setMobileMenuOpen(false);
        }}
       >
        <ListItemText primary={item.label} />
       </ListItem>
      ))}
      <ListItem button onClick={handleExploreClick}>
       <ListItemText primary="Explore More" />
      </ListItem>
      <hr />
      <ListItem
       button
       onClick={() => {
        if (user) {
         logout();
        } else {
         router.push('/login');
        }
        setMobileMenuOpen(false);
       }}
      >
       <ListItemText
        primary={user ? 'Logout' : 'Login'}
        sx={{color: 'green', fontWeight: 'bold'}}
       />
      </ListItem>
     </List>
    </Box>
   </Drawer>
  </header>
 );
};
