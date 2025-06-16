'use client';
import Link from 'next/link';
import {
 Grid,
 Card,
 CardContent,
 Container,
 Typography,
 Button,
 Divider,
 Box,
} from '@mui/material';
import {blogListing} from '@/shared/constants/blogData';

export default function BlogCard() {
 return (
  <Container maxWidth="xl">
   <div className="tp-home-4-service-title text-center mb-60">
    <span className="tp-section-v_2-title-pre">Latest Insights</span>
    <h3 className="tp-section-title">
     Our Recent Blog Posts <br />
     and Articles
    </h3>
   </div>
   <Box sx={{py: 8, px: 2}}>
    <Grid container spacing={4} justifyContent="center">
     {blogListing.courses?.slice(0, 4).map((blog) => (
      <Box
       className="row wow fadeInUp"
       data-wow-duration=".6s"
       data-wow-delay=".6s"
       sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 3,
        background: 'white',
        height: '350px',
        width: {xs: '100%', sm: '48%'},
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: 'box-shadow 0.3s',
        mx: 'auto',
        '&:hover': {
         boxShadow: 3,
        },
       }}
      >
       <Typography
        variant="h6"
        component="h3"
        sx={{
         fontWeight: 'bold',
         mb: 2,
         textAlign: 'center',
        }}
       >
        {blog.title}
       </Typography>

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
        variant="outlined"
        color="primary"
        component={Link}
        href={`/blogdetail/${blog.id}`}
        fullWidth
        sx={{mt: 'auto'}}
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
