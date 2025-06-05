'use client';
import {useState, useEffect} from 'react';
import {format, isTuesday, isThursday, isSaturday, addDays} from 'date-fns';
import {useRouter} from 'next/navigation';
import {
 Alert,
 TextField,
 Button,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
 Paper,
 Box,
 Container,
} from '@mui/material';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider, DatePicker} from '@mui/x-date-pickers';

export default function Seminar() {
 const router = useRouter();
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  cnic: '',
  date: null,
  slot: '',
 });
 const style = {
  height: '22.5px',
  border: 'none',
 };
 const [errors, setErrors] = useState({});
 const [availableDates, setAvailableDates] = useState([]);
 const [availableSlots, setAvailableSlots] = useState([]);
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [success, setSuccess] = useState(false);
 const [capacityReached, setCapacityReached] = useState(false);
 const [seminars, setSeminars] = useState([]);
 const [isFormValid, setIsFormValid] = useState(false);
 const [userId, setUserId] = useState(null);

 useEffect(() => {
  const getUser = localStorage.getItem('user');
  const {id, name, email,phone,cnic} = JSON.parse(getUser);
   setUserId(id);
   setFormData({
    name,
    email,
    phone,
    cnic,
   });
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

 // Validate form whenever formData changes
 useEffect(() => {
  validateForm();
 }, [formData]);

 const validateForm = () => {
  const newErrors = {};

  // Name validation (no numbers allowed)
  if (!formData.name?.trim()) {
   newErrors.name = 'Name is required';
  } else if (/\d/.test(formData.name)) {
   newErrors.name = 'Name should not contain numbers';
  }

  // Email validation
  if (!formData.email?.trim()) {
   newErrors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
   newErrors.email = 'Email is invalid';
  }

  // Phone validation
  if (!formData.phone?.trim()) {
   newErrors.phone = 'Phone number is required';
  } else if (!/^\d{11}$/.test(formData.phone)) {
   newErrors.phone = 'Phone must be 11 digits';
  }

  // CNIC validation
  if (!formData.cnic?.trim()) {
   newErrors.cnic = 'CNIC is required';
  } else if (!/^\d{13}$/.test(formData.cnic)) {
   newErrors.cnic = 'CNIC must be 13 digits';
  }

  // Date validation
  if (!formData.date) {
   newErrors.date = 'Date is required';
  }

  // Slot validation
  if (!formData.slot) {
   newErrors.slot = 'Time slot is required';
  }

  setErrors(newErrors);
  const isValid = Object.keys(newErrors).length === 0;
  setIsFormValid(isValid);
  return isValid;
 };

 const handleChange = (field, value) => {
  setFormData((prev) => ({...prev, [field]: value}));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (validateForm()) {
   setIsSubmitting(true);

   try {
    const response = await fetch('/api/seminar', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      cnic: formData.cnic,
      date: formData.date,
      timeSlot: formData.slot,
      userId,
     }),
    });

    const data = await response.json();

    if (data.success) {
     setSuccess(true);
     // Refresh seminars
     const res = await fetch('/api/seminar');
     const seminarData = await res.json();
     if (seminarData.success) setSeminars(seminarData.data);
     setTimeout(() => {
      router.push('/');
     }, 3000);
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

 const shouldDisableDate = (date) => {
  return !(isTuesday(date) || isThursday(date) || isSaturday(date));
 };

 return (
  <Container maxWidth="md" sx={{mt: 4, mb: 6}}>
   <Paper elevation={3} sx={{p: 4}}>
    <Typography variant="h4" gutterBottom>
     Seminar Booking
    </Typography>

    <Typography variant="body1" gutterBottom sx={{mb: 3}}>
     Seminars are held every Tuesday, Thursday, and Saturday from 2PM to 5PM.
    </Typography>

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
     <div className="row mb-3">
      <div className="col-md-6 mb-3">
       <TextField
        inputProps={{style: style}}
        fullWidth
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        required
       />
      </div>

      <div className="col-md-6 mb-3">
       <TextField
        fullWidth
        inputProps={{style: style}}
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        required
       />
      </div>
     </div>

     <div className="row mb-3">
      <div className="col-md-6 mb-3">
       <TextField
        inputProps={{style: style}}
        fullWidth
        label="CNIC Number"
        name="cnic"
        value={formData.cnic}
        onChange={(e) => handleChange('cnic', e.target.value)}
        error={!!errors.cnic}
        helperText={errors.cnic}
        required
       />
      </div>

      <div className="col-md-6 mb-3">
       <TextField
        inputProps={{style: style}}
        fullWidth
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        error={!!errors.phone}
        helperText={errors.phone}
        required
       />
      </div>
     </div>

     <div className="row mb-4">
      <div className="col-md-4">
       <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
         label="Select Date"
         value={formData.date}
         onChange={(date) => {
          setFormData((prev) => ({...prev, date, slot: ''}));
         }}
         shouldDisableDate={shouldDisableDate}
         renderInput={(params) => (
          <TextField
           {...params}
           fullWidth
           error={!!errors.date}
           helperText={errors.date}
           required
          />
         )}
        />
       </LocalizationProvider>
      </div>

      <div className="col-md-8">
       {/* Availability Section */}
       {formData.date && (
        <Box>
         <Typography variant="h6" gutterBottom>
          Available Time Slots
         </Typography>

         <TableContainer component={Paper}>
          <Table>
           <TableHead>
            <TableRow>
             <TableCell>Time Slot</TableCell>
             <TableCell></TableCell>
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
               <TableCell style={{color:"green"}}>Press to Confirm </TableCell>
               <TableCell>
                <Button
                 variant={formData.slot === slot ? 'contained' : 'outlined'}
                 onClick={() => {
                  setFormData((prev) => ({...prev, slot}));
                 }}
                 disabled={available <= 0}
                >
                 {available <= 0 ? 'Fully Booked' : 'confirm'}
                </Button>
               </TableCell>
              </TableRow>
             );
            })}
           </TableBody>
          </Table>
         </TableContainer>
        </Box>
       )}
      </div>
     </div>

     <Box sx={{mt: 3, mb: 3}}>
      <Button
       type="submit"
       variant="contained"
       size="large"
       disabled={isSubmitting || !isFormValid}
       fullWidth
      >
       {isSubmitting ? 'Submitting...' : 'Book Seminar'}
      </Button>
     </Box>
    </form>
   </Paper>
  </Container>
 );
}
