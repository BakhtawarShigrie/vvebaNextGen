'use client';
import Link from 'next/link';
import {
 Grid,
 Container,
 Typography,
 Button,
 Box,
} from '@mui/material';
import {blogListing} from '@/shared/constants/blogData';
import Image from 'next/image';

export default function BlogCard() {
 return (
  <Container style={{paddingTop:"50px" , paddingBottom: "50px" , marginTop:"50px"}} maxWidth="xl" id="blogPost">
   <div className="tp-home-4-service-title text-center">
    {/* <span className="tp-section-v_2-title-pre">Latest Insights</span> */}
    <h3 className="tp-section-title">
     Our Recent Blog Posts <br />
     and Articles
    </h3>
   </div>
   <Box sx={{py: 3, px: 2}}>
    <Grid container spacing={2} justifyContent="center">
     {blogListing.courses?.slice(0, 4).map((blog) => (
      <Box
       className="wow fadeInUp"
       data-wow-duration=".6s"
       data-wow-delay=".6s"
       sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 2,
        background: '#f1f2f2',
        height: '100%',
        width: {xs: '100%', sm: '24%'},
        display: 'flex',
        alignItems: 'center',
        justifyContent : "flex-start",
        flexDirection: 'column',
        transition: 'box-shadow 0.3s',
        // my: 'auto',
        '&:hover': {
         boxShadow: 3,
        },
       }}
      >
       <Typography
        variant="h6"
        component="h3"
        color="#e92e3e"
        sx={{
         fontWeight: 'bold',
         mb: 2,
         textAlign: 'center',
        }}
       >
        {blog.title}
         </Typography>
         
       <Image
        src={blog.image}
        alt="Blog image"
        width={200}
        height={100}
        style={{ marginBottom: '16px' }}
        loading='lazy'
       />

       <Typography
        variant="body2"
        color="text.secondary"
        sx={{
         flexGrow: 1,
         mb: 2,
         textAlign: 'center',
        }}
       >
        {blog.description.length > 100
         ? `${blog.description.substring(0, 100)}...`
         : blog.description}
       </Typography>

       <Button
        variant="contained"
        sx={{
         backgroundColor: '#363f46', 
         color: 'white', 
         '&:hover': {
          backgroundColor: '#e92e3e',
          color: '#ffffff',
         },
        }}
        component={Link}
        href={`/blogdetail/${blog.id}`}
        fullWidth
       >
        Read More
       </Button>
      </Box>
     ))}
    </Grid>
   </Box>
  </Container>
 );
}
