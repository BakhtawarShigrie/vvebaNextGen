'use client';
import {notFound} from 'next/navigation';
import {
 Container,
 Typography,
 Box,
 Button,
 Divider,
 Grid,
 Pagination,
} from '@mui/material';
import Link from 'next/link';
import {useState} from 'react';
import {blogListing} from '@/shared/constants/blogData';
import Image from 'next/image';

export default function BlogDetailsPage({params}) {
 const blogId = params?.id;
 const blog = blogListing.courses?.find(
  (blog) => blog.id.toString() === blogId
 );

 if (!blog) {
  return notFound();
 }

 return (
  <Container maxWidth="lg" sx={{pb: 25}}>
   <div className="tp-home-4-service-title text-center mt-60">
    <span className="tp-section-v_2-title-pre">Latest Insights</span>
    <h3 className="tp-section-title">Blog Details Section</h3>
   </div>

   <Box sx={{mb: 6}}>
    <Typography
     variant="h3"
     component="h1"
     gutterBottom
     sx={{
      fontWeight: 'bold',
      color: '#363f46',
      textAlign: {xs: 'center', sm: 'left'},
      fontSize: {xs: '2rem', sm: '2.5rem', md: '3rem'},
     }}
    >
     {blog.title}
    </Typography>

    <Typography
     variant="body1"
     paragraph
     sx={{
      mb: 3,
      textWrap: 'wrap',
     }}
    >
     {blog.description}
    </Typography>

    <Divider  sx={{my: 3}} />

    <Box
     sx={{
      display: 'flex',
      flexDirection: {xs: 'column', sm: 'row'},
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 2,
     }}
    >
     <Button
      variant="contained"
      sx={{
       px: 4,
       backgroundColor: '#363f46', // default background
       color: '#fff !important', // default text
       '&:hover': {
        backgroundColor: '#e92e3e', // hover background
        color: '#ffffff', // hover text
       },
      }}
      component={Link}
      href="/"
     >
      Back to Blogs
     </Button>
    </Box>
   </Box>

   <RelatedBlogs currentBlogId={blogId} />
  </Container>
 );
}

function RelatedBlogs({currentBlogId}) {
 const [page, setPage] = useState(1);
 const blogsPerPage = 3;

 const filteredBlogs = blogListing.courses?.filter(
  (blog) => blog.id.toString() !== currentBlogId
 );

 const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
 const paginatedBlogs = filteredBlogs.slice(
  (page - 1) * blogsPerPage,
  page * blogsPerPage
 );

 return (
  <Box sx={{mt: 6, textAlign: 'center'}}>
   <div className="tp-home-4-service-title text-center mt-60">
    <span className="tp-section-v_2-title-pre">Latest Insights</span>
    <h3 className="tp-section-title">Others Latest Blogs</h3>
   </div>

   <Grid container spacing={4} justifyContent="center">
    {paginatedBlogs.map((blog) => (
     <Grid item key={blog.id} xs={12} sm={6} md={4} lg={3}>
      <BlogCard blog={blog} />
     </Grid>
    ))}
   </Grid>

   {totalPages > 1 && (
    <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
     <Pagination
      count={totalPages}
      page={page}
      onChange={(_, value) => setPage(value)}
      shape="rounded"
      sx={{
       '& .MuiPaginationItem-root': {
        color: '#363f46', // text color of inactive items
        borderColor: '#e92e3e',
       },
       '& .Mui-selected': {
        backgroundColor: '#e92e3e !important',
        color: '#fff !important',
        borderColor: '#e92e3e !important',
       },
       '& .MuiPaginationItem-root:hover': {
        backgroundColor: '#f1f2f2', // light transparent red on hover
       },
      }}
     />
    </Box>
   )}
  </Box>
 );
}

function BlogCard({blog}) {
 return (
  <Box
   sx={{
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 2,
    background: '#f1f2f2',
    p: 3,
    height: '100%',
    width: {xs: '100%', sm: '350px'},
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
    style={{marginBottom: '16px'}}
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
     backgroundColor: '#363f46', // default background
     color: 'white', // default text
     '&:hover': {
      backgroundColor: '#e92e3e', // hover background
      color: '#ffffff', // hover text
     },
    }}
    component={Link}
    href={`/blogdetail/${blog.id}`}
    fullWidth
   >
    Read More
   </Button>
  </Box>
 );
}
