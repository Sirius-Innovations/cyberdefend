import { Link } from 'react-router-dom';
import { HiNewspaper, HiAcademicCap, HiInbox, HiUsers } from 'react-icons/hi';

function AdminSidebar() {
  const menuItems = [
    { icon: <HiNewspaper />, label: 'Blog Posts', path: '/admin/posts' },
    { icon: <HiAcademicCap />, label: 'Courses', path: '/admin/courses' },
    { icon: <HiInbox />, label: 'Inquiries', path: '/admin/inquiries' },
    { icon: <HiUsers />, label: 'Users', path: '/admin/users' },
  ];

  return (
    <aside className="w-64 bg-dark-light min-h-screen p-4">
      <div className="text-primary text-xl font-bold mb-8">Admin Dashboard</div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-dark text-gray-300 hover:text-primary"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;