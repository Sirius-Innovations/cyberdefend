import { motion } from 'framer-motion';
import { HiShieldCheck, HiLockClosed, HiChartBar } from 'react-icons/hi';

function Services() {
  const services = [
    {
      icon: <HiShieldCheck className="w-12 h-12 text-primary" />,
      title: 'Physical Security',
      description: 'Comprehensive protection for your physical assets',
      features: [
        'Guard Services',
        'Surveillance Systems',
        'Access Control',
        '24/7 Monitoring'
      ]
    },
    {
      icon: <HiLockClosed className="w-12 h-12 text-primary" />,
      title: 'Cyber Security',
      description: 'Advanced digital protection solutions',
      features: [
        'Network Security',
        'Data Protection',
        'Incident Response',
        'Threat Detection'
      ]
    },
    {
      icon: <HiChartBar className="w-12 h-12 text-primary" />,
      title: 'Risk Assessment',
      description: 'Expert security consulting and analysis',
      features: [
        'Security Audits',
        'Compliance Checks',
        'Vulnerability Assessment',
        'Security Planning'
      ]
    }
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
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to protect your business
            in both physical and digital domains.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-light p-6 rounded-lg hover:transform hover:scale-105 transition-transform"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-primary hover:bg-primary-dark text-dark font-bold py-2 px-6 rounded-lg transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;