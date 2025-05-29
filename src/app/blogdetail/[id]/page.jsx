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

export default function BlogDetailsPage({params}) {
 const blogId = params?.id;
 const blog = blogListing.courses?.find(
  (blog) => blog.id.toString() === blogId
 );

 if (!blog) {
  return notFound();
 }

 return (
  <Container maxWidth="lg" sx={{py: 25}}>
   <Box sx={{textAlign: 'center'}}>
    <h1>Blog Details Section</h1> 
   </Box>

   <Box sx={{mb: 6}}>
    <Typography
     variant="h3"
     component="h1"
     gutterBottom
     sx={{
      fontWeight: 'bold',
      color: 'primary.main',
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

    <Divider sx={{my: 3}} />

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
      color="primary"
      component={Link}
      href="/courses"
      sx={{px: 4}}
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
   <Typography
    variant="h4"
    component="h2"
    gutterBottom
    sx={{
     fontWeight: 'bold',
     mb: 4,
     fontSize: {xs: '1.5rem', sm: '2rem'},
    }}
   >
    Others Latest Blogs
   </Typography>

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
      color="primary"
      shape="rounded"
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
    href={`/blogDetail/${blog.id}`}
    fullWidth
    sx={{mt: 'auto'}}
   >
    Read More
   </Button>
  </Box>
 );
}
