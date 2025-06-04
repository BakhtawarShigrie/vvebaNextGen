'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useAuth } from '@/app/context/AuthContext';

export default function ProtectedRoute({children, requiredRole}) {
 const {isAuthenticated, hasRole, loading} = useAuth();
 const router = useRouter();

 useEffect(() => {
  if (
   !loading &&
   (!isAuthenticated() || (requiredRole && !hasRole(requiredRole)))
  ) {
   router.push('/login');
  }
 }, [isAuthenticated, loading, requiredRole, hasRole, router]);

 if (
  loading ||
  !isAuthenticated() ||
  (requiredRole && !hasRole(requiredRole))
 ) {
  return (
   <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
    <CircularProgress />
   </Box>
  );
 }

 return children;
}
