'use client';

import Dashboard from '@/shared/components/dashboard';
import ProtectedRoute from '@/shared/components/protected';

export default function AdminDashboard() {
 return (
   <ProtectedRoute requiredRole="admin">
    <Dashboard />
   </ProtectedRoute>
 );
}
