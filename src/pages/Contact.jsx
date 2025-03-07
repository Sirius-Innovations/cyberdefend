import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

function Contact() {
  const contactInfo = [
    {
      icon: <HiMail className="w-6 h-6" />,
      title: 'Email',
      details: 'contact@cyberdefend.com',
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
    },
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      title: 'Address',
      details: '123 Security Street, Cyber City, CC 12345',
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with our security experts to discuss how we can help
            protect your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-light p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-dark font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-dark-light p-6 rounded-lg"
              >
                <div className="text-primary">{info.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-400">{info.details}</p>
                </div>
              </div>
            ))}
            
            {/* Map placeholder */}
            <div className="bg-dark-light h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Map Integration Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;