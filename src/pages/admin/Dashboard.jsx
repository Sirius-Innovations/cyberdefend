import { motion } from 'framer-motion';
import { HiUsers, HiNewspaper, HiAcademicCap, HiInbox } from 'react-icons/hi';
import { mockStats, mockInquiries } from '../../data/mockData';

function AdminDashboard() {
  const stats = [
    { icon: <HiUsers />, label: 'Total Users', value: mockStats.totalUsers },
    { icon: <HiNewspaper />, label: 'Blog Posts', value: mockStats.blogPosts },
    { icon: <HiAcademicCap />, label: 'Active Courses', value: mockStats.activeCourses },
    { icon: <HiInbox />, label: 'New Inquiries', value: mockStats.newInquiries },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-dark-light p-6 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="text-primary text-2xl">{stat.icon}</div>
              <div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-dark-light p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Recent Inquiries</h2>
        <div className="space-y-4">
          {mockInquiries.map((inquiry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between text-gray-300 p-4 bg-dark rounded-lg"
            >
              <div>
                <span className="text-primary font-semibold">{inquiry.name}</span>
                <span className="mx-2">-</span>
                <span>{inquiry.subject}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                inquiry.status === 'pending' ? 'bg-yellow-500' :
                inquiry.status === 'resolved' ? 'bg-green-500' :
                'bg-blue-500'
              } text-dark`}>
                {inquiry.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;