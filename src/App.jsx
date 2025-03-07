import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminPosts from './pages/admin/Posts';
import AdminCourses from './pages/admin/Courses';
import AdminInquiries from './pages/admin/Inquiries';
import AdminUsers from './pages/admin/Users';

function App() {
  return (
    <Router>
      <div className="min-h-screen  bg-dark text-gray-100 mx-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="posts" element={<AdminPosts />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="inquiries" element={<AdminInquiries />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
        </Routes>
        <Footer />
      </div>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App