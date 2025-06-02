'use client';
import {useState, useEffect} from 'react';
import {
 TextField,
 Button,
 Container,
 Typography,
 Paper,
 Grid,
 Alert,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Dialog,
 DialogTitle,
 DialogContent,
 DialogActions,
 Box,
} from '@mui/material';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider, DatePicker} from '@mui/x-date-pickers';
import {format, isTuesday, isThursday, isSaturday, addDays} from 'date-fns';
import {useRouter} from 'next/navigation';

export default function SeminarPage() {
 const router = useRouter();
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  cnic: '',
  date: null,
  slot: '',
 });
 const [errors, setErrors] = useState({});
 const [availableDates, setAvailableDates] = useState([]);
 const [availableSlots, setAvailableSlots] = useState([]);
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [success, setSuccess] = useState(false);
 const [capacityReached, setCapacityReached] = useState(false);
 const [seminars, setSeminars] = useState([]);
 const [loginOpen, setLoginOpen] = useState(false);
 const [authData, setAuthData] = useState({
  email: '',
  password: '',
 });
 const [user, setUser] = useState(null);

 // Check session on load
 useEffect(() => {
  const checkSession = async () => {
   try {
    const res = await fetch('/api/auth/session');
    const data = await res.json();
    if (data.success) {
     setUser(data.user);
     setFormData((prev) => ({
      ...prev,
      name: data.user.name,
      email: data.user.email,
      phone: data.user.phone,
      cnic: data.user.cnic,
     }));
    }
   } catch (error) {
    console.error('Session check failed:', error);
   }
  };
  checkSession();
 }, []);

 // Fetch seminars
 useEffect(() => {
  const fetchSeminars = async () => {
   try {
    const res = await fetch('/api/seminar');
    const data = await res.json();
    if (data.success) {
     setSeminars(data.data);
    }
   } catch (error) {
    console.error('Error fetching seminars:', error);
   }
  };
  fetchSeminars();
 }, []);

 // Generate available dates
 useEffect(() => {
  const dates = [];
  for (let i = 0; i < 30; i++) {
   const date = addDays(new Date(), i);
   if (isTuesday(date) || isThursday(date) || isSaturday(date)) {
    dates.push(date);
   }
  }
  setAvailableDates(dates);
 }, []);

 // Update slots when date changes
 useEffect(() => {
  if (formData.date) {
   const dateKey = format(formData.date, 'yyyy-MM-dd');
   const seminar = seminars.find(
    (s) => format(s.date, 'yyyy-MM-dd') === dateKey
   );

   if (seminar) {
    const slots = [];
    if (seminar.attendees.length < seminar.maxCapacity) {
     slots.push(seminar.timeSlot);
    }
    setAvailableSlots(slots);
    setCapacityReached(slots.length === 0);
   } else {
    setAvailableSlots(['2PM-5PM']);
    setCapacityReached(false);
   }
  }
 }, [formData.date, seminars]);

 const validate = () => {
  const newErrors = {};
  if (!formData.name.trim()) newErrors.name = 'Name is required';
  if (!formData.email.trim()) newErrors.email = 'Email is required';
  else if (!/^\S+@\S+\.\S+$/.test(formData.email))
   newErrors.email = 'Email is invalid';
  if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
  else if (!/^\d{11}$/.test(formData.phone))
   newErrors.phone = 'Phone must be 11 digits';
  if (!formData.cnic.trim()) newErrors.cnic = 'CNIC is required';
  else if (!/^\d{13}$/.test(formData.cnic))
   newErrors.cnic = 'CNIC must be 13 digits';
  if (!formData.date) newErrors.date = 'Date is required';
  if (!formData.slot) newErrors.slot = 'Time slot is required';

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user) {
   setLoginOpen(true);
   return;
  }

  if (validate()) {
   setIsSubmitting(true);

   try {
    const response = await fetch('/api/seminar', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      date: formData.date,
      timeSlot: formData.slot,
     }),
     credentials: 'include',
    });

    const data = await response.json();

    if (data.success) {
     setSuccess(true);
     // Refresh seminars
     const res = await fetch('/api/seminar');
     const seminarData = await res.json();
     if (seminarData.success) setSeminars(seminarData.data);
    } else {
     alert(data.message || 'Booking failed');
    }
   } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
   } finally {
    setIsSubmitting(false);
   }
  }
 };

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
   // First try to register with form data
   const registerRes = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
     name: formData.name,
     email: formData.email,
     phone: formData.phone,
     cnic: formData.cnic,
     password: 'defaultPassword', // In real app, collect password
    }),
    credentials: 'include',
   });

   const registerData = await registerRes.json();

   if (registerData.success) {
    setUser(registerData.user);
    setLoginOpen(false);
   } else {
    // If user exists, try to login
    const loginRes = await fetch('/api/auth/login', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      email: formData.email,
      password: 'defaultPassword',
     }),
     credentials: 'include',
    });

    const loginData = await loginRes.json();

    if (loginData.success) {
     setUser(loginData.user);
     setLoginOpen(false);
    } else {
     alert(loginData.message || 'Authentication failed');
    }
   }
  } catch (error) {
   console.error('Error:', error);
   alert('An error occurred. Please try again.');
  }
 };

 const shouldDisableDate = (date) => {
  return !(isTuesday(date) || isThursday(date) || isSaturday(date));
 };

 return (
  <Container maxWidth="md" sx={{mt: 4}}>
   <Paper elevation={3} sx={{p: 4}}>
    <Typography variant="h4" gutterBottom>
     Seminar Booking
    </Typography>

    <Typography variant="body1" gutterBottom sx={{mb: 3}}>
     Seminars are held every Tuesday, Thursday, and Saturday from 2PM to 5PM.
     Each seminar has a maximum capacity of 100 attendees.
    </Typography>

    {!user && (
     <Alert severity="warning" sx={{mb: 3}}>
      Please login to book a seminar. If you don't have an account, you'll be
      registered automatically.
     </Alert>
    )}

    {capacityReached && (
     <Alert severity="error" sx={{mb: 3}}>
      All slots for this date are fully booked. Please select another date.
     </Alert>
    )}

    {success && (
     <Alert severity="success" sx={{mb: 3}}>
      Your seminar booking has been confirmed!
     </Alert>
    )}

    <form onSubmit={handleSubmit}>
     <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
       <TextField
        fullWidth
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        error={!!errors.name}
        helperText={errors.name}
        disabled={!!user}
       />
      </Grid>

      <Grid item xs={12} md={6}>
       <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        error={!!errors.email}
        helperText={errors.email}
        disabled={!!user}
       />
      </Grid>

      <Grid item xs={12} md={6}>
       <TextField
        fullWidth
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        error={!!errors.phone}
        helperText={errors.phone}
        disabled={!!user}
       />
      </Grid>

      <Grid item xs={12} md={6}>
       <TextField
        fullWidth
        label="CNIC Number"
        name="cnic"
        value={formData.cnic}
        onChange={(e) => setFormData({...formData, cnic: e.target.value})}
        error={!!errors.cnic}
        helperText={errors.cnic}
        disabled={!!user}
       />
      </Grid>

      <Grid item xs={12} md={6}>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
         label="Select Date"
         value={formData.date}
         onChange={(date) => setFormData({...formData, date, slot: ''})}
         shouldDisableDate={shouldDisableDate}
         renderInput={(params) => (
          <TextField
           {...params}
           fullWidth
           error={!!errors.date}
           helperText={errors.date}
          />
         )}
        />
       </LocalizationProvider>
      </Grid>

      {formData.date && (
       <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
         Available Time Slots
        </Typography>

        <TableContainer component={Paper} sx={{mb: 3}}>
         <Table>
          <TableHead>
           <TableRow>
            <TableCell>Time Slot</TableCell>
            <TableCell>Availability</TableCell>
            <TableCell>Action</TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
           {availableSlots.map((slot) => {
            const dateKey = format(formData.date, 'yyyy-MM-dd');
            const seminar = seminars.find(
             (s) =>
              format(s.date, 'yyyy-MM-dd') === dateKey && s.timeSlot === slot
            );

            const available = seminar
             ? seminar.maxCapacity - seminar.attendees.length
             : 100;

            return (
             <TableRow key={slot}>
              <TableCell>{slot}</TableCell>
              <TableCell>
               {available} seats available (of {seminar?.maxCapacity || 100})
              </TableCell>
              <TableCell>
               <Button
                variant={formData.slot === slot ? 'contained' : 'outlined'}
                onClick={() => setFormData({...formData, slot})}
                disabled={available <= 0}
               >
                {available <= 0 ? 'Fully Booked' : 'Select'}
               </Button>
              </TableCell>
             </TableRow>
            );
           })}
          </TableBody>
         </Table>
        </TableContainer>
       </Grid>
      )}

      <Grid item xs={12}>
       <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={isSubmitting}
       >
        {isSubmitting ? 'Submitting...' : 'Book Seminar'}
       </Button>
      </Grid>
     </Grid>
    </form>
   </Paper>

   {/* Login Dialog */}
   <Dialog open={loginOpen} onClose={() => setLoginOpen(false)}>
    <DialogTitle>Login to Continue</DialogTitle>
    <DialogContent>
     <Box component="form" onSubmit={handleLogin} sx={{mt: 2}}>
      <TextField
       fullWidth
       label="Email"
       name="email"
       type="email"
       value={formData.email}
       disabled
       sx={{mb: 2}}
      />
      <TextField
       fullWidth
       label="Password"
       name="password"
       type="password"
       value={authData.password}
       onChange={(e) => setAuthData({...authData, password: e.target.value})}
       sx={{mb: 2}}
      />
     </Box>
    </DialogContent>
    <DialogActions>
     <Button onClick={() => setLoginOpen(false)}>Cancel</Button>
     <Button onClick={handleLogin} variant="contained">
      Login
     </Button>
    </DialogActions>
   </Dialog>
  </Container>
 );
}
