'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';

import {
 Container,
 Typography,
 TextField,
 Button,
 Box,
 Alert,
} from '@mui/material';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

export default function Login() {
 const router = useRouter();
 const {login} = useAuth();
 const [formData, setFormData] = useState({
  email: '',
  password: '',
 });
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(false);

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };
 const style = {
  height: '22.5px',
  border: 'none',
 };
 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);
  
     

  try {
   const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });

   const data = await response.json();

   if (!response.ok) {
    throw new Error(data.message || 'Login failed');
   }

      login(data.user, data.token);
      
      const { role } = data.user;

      if (role == 'user') {
          router.push('/seminar');
      } else {
          router.push('/dashboard');
      }

  } catch (err) {
   setError(err.message);
   setLoading(false);
  }
 };

 return (
  <Container maxWidth="sm">
   <Box sx={{mt: 8, mb: 4}}>
    <Typography variant="h4" component="h1" gutterBottom>
     Login
    </Typography>

    {error && (
     <Alert severity="error" sx={{mb: 2}}>
      {error}
     </Alert>
    )}

    <form onSubmit={handleSubmit}>
     <TextField
      fullWidth
      inputProps={{style: style}}
      margin="normal"
      label="Email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
     />
     <TextField
      fullWidth
      inputProps={{style: style}}
      margin="normal"
      label="Password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
     />
     <Button
      type="submit"
      variant="contained"
      fullWidth
      disabled={loading}
      sx={{mt: 3, mb: 2}}
     >
      {loading ? 'Logging in...' : 'Login'}
     </Button>
     <Typography>
      Don't have an account? <Link href="/register">Register</Link>
     </Typography>
    </form>
   </Box>
  </Container>
 );
}
