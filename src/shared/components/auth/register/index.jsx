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
 Select,
 MenuItem,
 FormControl,
 InputLabel,
} from '@mui/material';
import Link from 'next/link';

export default function Register() {
 const router = useRouter();
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  role: 'user',
 });
 const [error, setError] = useState('');
 const [success, setSuccess] = useState('');
 const [userId, setUserId] = useState(null);
 const [showOtpForm, setShowOtpForm] = useState(false);
 const [otp, setOtp] = useState('');

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
  setSuccess('');

  try {
   const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });

   const data = await response.json();

   if (!response.ok) {
    throw new Error(data.message || 'Registration failed');
   }

   setUserId(data.userId);
   setShowOtpForm(true);
   setSuccess(data.message);
  } catch (err) {
   setError(err.message);
  }
 };

 const handleVerify = async (e) => {
  e.preventDefault();
  setError('');

  try {
   const response = await fetch('/api/auth/verify', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({userId, otp}),
   });

   const data = await response.json();

   if (!response.ok) {
    throw new Error(data.message || 'Verification failed');
   }

   setSuccess(data.message);
   setTimeout(() => {
    router.push('/login');
   }, 2000);
  } catch (err) {
   setError(err.message);
  }
 };

 return (
  <Container maxWidth="sm">
   <Box sx={{mt: 8, mb: 4}}>
    <Typography variant="h4" component="h1" gutterBottom>
     Register
    </Typography>

    {error && (
     <Alert severity="error" sx={{mb: 2}}>
      {error}
     </Alert>
    )}
    {success && (
     <Alert severity="success" sx={{mb: 2}}>
      {success}
     </Alert>
    )}

    {!showOtpForm ? (
     <form onSubmit={handleSubmit}>
      <TextField
       fullWidth
        inputProps={{style: style}}
       margin="normal"
       label="Name"
       name="name"
       value={formData.name}
       onChange={handleChange}
       required
      />
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
      <FormControl fullWidth margin="normal">
       <InputLabel>Role</InputLabel>
       <Select
        name="role"
        value={formData.role}
        onChange={handleChange}
        label="Role"
       >
        <MenuItem value="user">User</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
       </Select>
      </FormControl>
      <Button type="submit" variant="contained" fullWidth sx={{mt: 3, mb: 2}}>
       Register
      </Button>
      <Typography>
       Already have an account? <Link href="/login">Login</Link>
      </Typography>
     </form>
    ) : (
     <form onSubmit={handleVerify}>
      <Typography variant="h6" gutterBottom>
       Verify Your Email
      </Typography>
      <Typography paragraph>
       We've sent an OTP to your email. Please enter it below.
      </Typography>
      <TextField
       fullWidth
       margin="normal"
       label="OTP Code"
       name="otp"
       value={otp}
       onChange={(e) => setOtp(e.target.value)}
       required
      />
      <Button type="submit" variant="contained" fullWidth sx={{mt: 3, mb: 2}}>
       Verify
      </Button>
     </form>
    )}
   </Box>
  </Container>
 );
}
