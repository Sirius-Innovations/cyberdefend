import { useState } from 'react';
import { motion } from 'framer-motion';
import { mockInquiries } from '../../data/mockData';
import { HiMail, HiCheck, HiX } from 'react-icons/hi';

function AdminInquiries() {
  const [inquiries, setInquiries] = useState(mockInquiries);

  const handleStatusChange = (id, newStatus) => {
    setInquiries(inquiries.map(inquiry =>
      inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry
    ));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Inquiries</h1>

      <div className="grid gap-6">
        {inquiries.map((inquiry, index) => (
          <motion.div
            key={inquiry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-dark-light p-6 rounded-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <HiMail className="text-primary text-xl" />
                <div>
                  <h2 className="font-semibold">{inquiry.name}</h2>
                  <p className="text-gray-400 text-sm">{inquiry.email}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                inquiry.status === 'pending' ? 'bg-yellow-500' :
                inquiry.status === 'resolved' ? 'bg-green-500' :
                'bg-blue-500'
              } text-dark`}>
                {inquiry.status}
              </span>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">{inquiry.subject}</h3>
              <p className="text-gray-400">{inquiry.message}</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{inquiry.date}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleStatusChange(inquiry.id, 'resolved')}
                  className="p-2 hover:bg-dark rounded-lg transition-colors"
                >
                  <HiCheck className="text-green-500" />
                </button>
                <button
                  onClick={() => handleStatusChange(inquiry.id, 'pending')}
                  className="p-2 hover:bg-dark rounded-lg transition-colors"
                >
                  <HiX className="text-red-500" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AdminInquiries;