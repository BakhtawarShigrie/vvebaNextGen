'use client';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {
 Box,
 Typography,
 Container,
 Paper,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 TablePagination,
 TextField,
 Button,
 Alert,
 CircularProgress,
} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {format} from 'date-fns';

const checkAdminSession = async () => {
 try {
  const res = await fetch('/api/admin/session', {
   credentials: 'include', // Important for cookies
  });

  if (!res.ok) {
   throw new Error('Session check failed');
  }

  const data = await res.json();
  return data.success;
 } catch (error) {
  console.error('Session check error:', error);
  return false;
 }
};

export default function AdminDashboard() {
 const router = useRouter();
 const [bookings, setBookings] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState('');
 const [dateFilter, setDateFilter] = useState(null);
 const [pagination, setPagination] = useState({
  page: 0,
  limit: 10,
  total: 0,
 });

 useEffect(() => {
  const checkAuth = async () => {
   try {
    const res = await fetch('/api/admin/session');
    const data = await res.json();
    if (!data.success) {
     router.push('/admin/login');
    }
   } catch (err) {
    router.push('/admin/login');
   }
  };

  checkAuth();
  fetchBookings();
 }, [pagination.page, pagination.limit, dateFilter]);

 const fetchBookings = async () => {
  try {
   setLoading(true);

   let url = `/api/admin?page=${pagination.page + 1}&limit=${pagination.limit}`;
   if (dateFilter) {
    url += `&date=${dateFilter.toISOString()}`;
   }

   const res = await fetch(url);
   const data = await res.json();

   if (!data.success) {
    throw new Error(data.message || 'Failed to fetch bookings');
   }

   setBookings(data.data);
   setPagination((prev) => ({
    ...prev,
    total: data.pagination.total,
   }));
  } catch (err) {
   setError(err.message);
  } finally {
   setLoading(false);
  }
 };

 const handleChangePage = (event, newPage) => {
  setPagination((prev) => ({...prev, page: newPage}));
 };

 const handleChangeRowsPerPage = (event) => {
  setPagination((prev) => ({
   ...prev,
   limit: parseInt(event.target.value, 10),
   page: 0,
  }));
 };

 const handleLogout = async () => {
  try {
   await fetch('/api/admin/logout', {method: 'POST'});
   router.push('/admin/login');
  } catch (err) {
   console.error('Logout error:', err);
  }
 };

 return (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
   <Container maxWidth="xl">
    <Box sx={{my: 4}}>
     <Box
      sx={{
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center',
       mb: 4,
      }}
     >
      <Typography variant="h4">Seminar Bookings</Typography>
      <Button variant="contained" color="error" onClick={handleLogout}>
       Logout
      </Button>
     </Box>

     <Box sx={{display: 'flex', gap: 2, mb: 3}}>
      <DatePicker
       label="Filter by date"
       value={dateFilter}
       onChange={(newValue) => setDateFilter(newValue)}
       renderInput={(params) => <TextField {...params} />}
      />
      <Button
       variant="outlined"
       onClick={() => setDateFilter(null)}
       disabled={!dateFilter}
      >
       Clear Filter
      </Button>
     </Box>

     {error && (
      <Alert severity="error" sx={{mb: 3}}>
       {error}
      </Alert>
     )}

     {loading ? (
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
       <CircularProgress />
      </Box>
     ) : (
      <>
       <TableContainer component={Paper}>
        <Table>
         <TableHead>
          <TableRow>
           <TableCell>User</TableCell>
           <TableCell>Email</TableCell>
           <TableCell>Phone</TableCell>
           <TableCell>CNIC</TableCell>
           <TableCell>Seminar Date</TableCell>
           <TableCell>Time Slot</TableCell>
           <TableCell>Booking Date</TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
          {bookings.map((booking) => (
           <TableRow key={booking._id}>
            <TableCell>{booking.user?.name}</TableCell>
            <TableCell>{booking.user?.email}</TableCell>
            <TableCell>{booking.user?.phone}</TableCell>
            <TableCell>{booking.user?.cnic}</TableCell>
            <TableCell>
             {booking.seminar?.date
              ? format(new Date(booking.seminar.date), 'PPP')
              : 'N/A'}
            </TableCell>
            <TableCell>{booking.seminar?.timeSlot || 'N/A'}</TableCell>
            <TableCell>{format(new Date(booking.createdAt), 'PPPp')}</TableCell>
           </TableRow>
          ))}
         </TableBody>
        </Table>
       </TableContainer>

       <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={pagination.total}
        rowsPerPage={pagination.limit}
        page={pagination.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
       />
      </>
     )}
    </Box>
   </Container>
  </LocalizationProvider>
 );
}
