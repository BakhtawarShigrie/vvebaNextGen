'use client';

import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {
 Container,
 Typography,
 TextField,
 Button,
 Box,
 Alert,
 InputAdornment,
 IconButton,
 Paper,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import Link from 'next/link';
import {useAuth} from '@/app/context/AuthContext';

export default function Login() {
 const router = useRouter();
 const {login} = useAuth();
 const [formData, setFormData] = useState({
  email: '',
  password: '',
 });
 const [showPassword, setShowPassword] = useState(false);
 const [errors, setErrors] = useState({
  email: '',
  password: '',
 });
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(false);
 const [isFormValid, setIsFormValid] = useState(false);

 const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData({
   ...formData,
   [name]: value,
  });

  // Validate on change
  validateField(name, value);
 };

 const validateField = (name, value) => {
  let error = '';

  switch (name) {
   case 'email':
    if (!value.trim()) {
     error = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
     error = 'Please enter a valid email';
    }
    break;
   case 'password':
    if (!value) {
     error = 'Password is required';
    } else if (value.length > 8) {
     error = 'Password must be 8 characters or less';
    }
    break;
   default:
    break;
  }

  setErrors((prev) => ({
   ...prev,
   [name]: error,
  }));
 };

 // Check if form is valid
 useEffect(() => {
  const isValid =
   formData.email && formData.password && !errors.email && !errors.password;
  setIsFormValid(isValid);
 }, [formData, errors]);

 const style = {
  height: '22.5px',
  border: 'none',
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  // Validate all fields before submission
  Object.keys(formData).forEach((field) => {
   validateField(field, formData[field]);
  });

  if (!isFormValid) {
   setLoading(false);
   return;
  }

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

   const {role} = data.user;

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
     <Paper sx={{ p:2 , mb:2}}>
    <Box sx={{mt: 4, mb: 4}}>
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
       error={!!errors.email}
       helperText={errors.email}
       required
      />
      <TextField
       fullWidth
       inputProps={{style: style}}
       margin="normal"
       label="Password (max 8 characters)"
       type={showPassword ? 'text' : 'password'}
       name="password"
       value={formData.password}
       onChange={handleChange}
       error={!!errors.password}
       helperText={errors.password}
       required
       InputProps={{
        endAdornment: (
         <InputAdornment position="end">
          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
           {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
         </InputAdornment>
        ),
       }}
      />
      <Button
       type="submit"
       variant="contained"
       fullWidth
       disabled={loading || !isFormValid}
       sx={{mt: 3, mb: 2}}
      >
       {loading ? 'Logging in...' : 'Login'}
      </Button>
      <Typography>
       Don't have an account? <Link href="/register">Register</Link>
      </Typography>
     </form>
    </Box>
   </Paper>
  </Container>
 );
}
