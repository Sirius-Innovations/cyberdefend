import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import AdminSidebar from './AdminSidebar';

function AdminLayout() {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex min-h-screen bg-dark">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;