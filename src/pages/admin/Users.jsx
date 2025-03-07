import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiUserCircle, HiMail, HiKey, HiTrash } from 'react-icons/hi';

function AdminUsers() {
  const [users, setUsers] = useState([
    { id: '1', name: 'John Smith', email: 'john@example.com', role: 'admin', status: 'active' },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', role: 'user', status: 'active' },
    { id: '3', name: 'Michael Chen', email: 'michael@example.com', role: 'user', status: 'inactive' },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Users</h1>

      <div className="grid gap-6">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-dark-light p-6 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="bg-dark p-3 rounded-full">
                <HiUserCircle className="text-primary text-2xl" />
              </div>
              <div>
                <h2 className="font-semibold">{user.name}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <HiMail />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HiKey />
                    <span>{user.role}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                user.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
              } text-dark`}>
                {user.status}
              </span>
              <button
                onClick={() => handleDelete(user.id)}
                className="p-2 hover:bg-dark rounded-lg transition-colors"
              >
                <HiTrash className="text-red-500" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AdminUsers;