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
} from '@mui/material';
import Link from 'next/link';
import {Visibility, VisibilityOff} from '@mui/icons-material';

export default function Register() {
 const router = useRouter();
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  cnic: '',
  password: '',
  confirmPassword: '',
 });
 const [errors, setErrors] = useState({
  name: '',
  email: '',
  phone: '',
  cnic: '',
  password: '',
  confirmPassword: '',
 });
 const [showPassword, setShowPassword] = useState(false);
 const [error, setError] = useState('');
 const [success, setSuccess] = useState('');
 const [userId, setUserId] = useState(null);
 const [showOtpForm, setShowOtpForm] = useState(false);
 const [otp, setOtp] = useState('');
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
   case 'name':
    if (!value.trim()) {
     error = 'Name is required';
    } else if (/\d/.test(value)) {
     error = 'Name should not contain numbers';
    }
    break;
   case 'email':
    if (!value.trim()) {
     error = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
     error = 'Please enter a valid email';
    }
    break;

   case 'phone':
    if (!value.trim()) {
     error = 'Phone number is required';
    } else if (!/^\d{11}$/.test(value)) {
     error = 'Phone must be 11 digits';
    }
    break;

   case 'cnic':
    if (!value.trim()) {
     error = 'CNIC is required';
    } else if (!/^\d{13}$/.test(value)) {
     error = 'CNIC must be 13 digits';
    }
    break;

   case 'password':
    if (!value) {
     error = 'Password is required';
    } else if (value.length > 8) {
     error = 'Password must be 8 characters or less';
    }
    // Check if confirm password matches when password changes
    if (formData.confirmPassword && value !== formData.confirmPassword) {
     setErrors((prev) => ({
      ...prev,
      confirmPassword: 'Passwords do not match',
     }));
    } else if (formData.confirmPassword) {
     setErrors((prev) => ({
      ...prev,
      confirmPassword: '',
     }));
    }
    break;
   case 'confirmPassword':
    if (!value) {
     error = 'Please confirm your password';
    } else if (value !== formData.password) {
     error = 'Passwords do not match';
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
   formData.name &&
   formData.email &&
   formData.phone &&
   formData.cnic &&
   formData.password &&
   formData.confirmPassword &&
   !errors.name &&
   !errors.email &&
   !errors.phone &&
   !errors.cnic &&
   !errors.password &&
   !errors.confirmPassword &&
   formData.password === formData.confirmPassword;
  setIsFormValid(isValid);
 }, [formData, errors]);

 const style = {
  height: '22.5px',
  border: 'none',
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');

  // Validate all fields before submission
  Object.keys(formData).forEach((field) => {
   validateField(field, formData[field]);
  });

  if (!isFormValid) return;

  try {
   const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     name: formData.name,
     email: formData.email,
      password: formData.password,
      phone: formData.phone,
     cnic: formData.cnic,
     role: 'user', // Default role since we removed the selection
    }),
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
      <div className="row mb-2">
       <div className="col-md-6 mb-2">
        <TextField
         fullWidth
         inputProps={{style: style}}
         margin="normal"
         label="Name"
         name="name"
         value={formData.name}
         onChange={handleChange}
         error={!!errors.name}
         helperText={errors.name}
         required
        />
       </div>

       <div className="col-md-6 mb-2">
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
       </div>
             
      </div>
           
      <div className="row mb-2">
       <div className="col-md-6 mb-4">
        <TextField
         inputProps={{style: style}}
         fullWidth
         label="CNIC Number"
         name="cnic"
         value={formData.cnic}
         onChange={handleChange}
         error={!!errors.cnic}
         helperText={errors.cnic}
         required
        />
       </div>

       <div className="col-md-6 mb-2">
        <TextField
         inputProps={{style: style}}
         fullWidth
         label="Phone Number"
         name="phone"
         value={formData.phone}
         onChange={handleChange}
         error={!!errors.phone}
         helperText={errors.phone}
         required
        />
       </div>
      </div>
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
      <TextField
       fullWidth
       inputProps={{style: style}}
       margin="normal"
       label="Confirm Password"
       type={showPassword ? 'text' : 'password'}
       name="confirmPassword"
       value={formData.confirmPassword}
       onChange={handleChange}
       error={!!errors.confirmPassword}
       helperText={errors.confirmPassword}
       required
      />
      <Button
       type="submit"
       variant="contained"
       fullWidth
       sx={{mt: 3, mb: 2}}
       disabled={!isFormValid}
      >
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
       inputProps={{style: style}}
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
