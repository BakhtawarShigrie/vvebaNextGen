import ProtectedRoute from "@/shared/components/protected";
import Seminar from "@/shared/components/seminar";

export default function SeminarPage() {
  return  <ProtectedRoute requiredRole='user'>
            <Seminar />
          </ProtectedRoute>
  
  
  
}
