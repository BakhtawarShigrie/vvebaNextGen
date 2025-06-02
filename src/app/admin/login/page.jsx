'use client';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {
 TextField,
 Button,
 Container,
 Typography,
 Box,
 Alert,
} from '@mui/material';

export default function AdminLogin() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(false);
 const router = useRouter();
 const style = {
  height: '22.5px',
  border: 'none',
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
   const response = await fetch('/api/admin/login', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
   });

   const data = await response.json();

   if (!data.success) {
    throw new Error(data.message || 'Login failed');
   }

   router.push('/admin/dashboard');
  } catch (err) {
   setError(err.message);
  } finally {
   setLoading(false);
  }
 };

 return (
  <Container maxWidth="sm">
   <Box
    sx={{
     marginTop: 8,
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
    }}
   >
    <Typography component="h1" variant="h5">
     Admin Login
    </Typography>

    {error && (
     <Alert severity="error" sx={{width: '100%', mt: 2}}>
      {error}
     </Alert>
    )}

    <Box component="form" onSubmit={handleSubmit} sx={{mt: 1, width: '100%'}}>
     <TextField
      margin="normal"
      required
      fullWidth
      inputProps={{style: style}}
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     />
     <TextField
      margin="normal"
      required
      fullWidth
      inputProps={{style: style}}
      name="password"
      label="Password"
      type="password"
      autoComplete="current-password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />
     <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{mt: 3, mb: 2}}
      disabled={loading}
     >
      {loading ? 'Signing In...' : 'Sign In'}
     </Button>
    </Box>
   </Box>
  </Container>
 );
}
