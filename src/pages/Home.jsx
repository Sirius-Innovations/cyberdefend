import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { HiShieldCheck, HiAcademicCap, HiLightningBolt } from 'react-icons/hi';

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <HiShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Advanced Security',
      description: 'State-of-the-art protection for your digital assets',
    },
    {
      icon: <HiAcademicCap className="w-8 h-8 text-primary" />,
      title: 'Expert Training',
      description: 'Comprehensive security courses for all skill levels',
    },
    {
      icon: <HiLightningBolt className="w-8 h-8 text-primary" />,
      title: 'Rapid Response',
      description: '24/7 incident response and support',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] min-w-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark-light z-0" />
        <div className=" mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Secure Your Digital Future with
              <span className="text-primary block md:inline"> CyberDefend</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
              Comprehensive security solutions and expert training to protect your business
              in an ever-evolving digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Link 
                to="/register" 
                className="bg-primary hover:bg-primary-dark text-dark font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/services"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-dark font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-dark-light">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-dark p-6 rounded-lg hover:transform hover:scale-105 transition-transform"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { value: '500+', label: 'Clients Protected' },
              { value: '1000+', label: 'Security Audits' },
              { value: '99.9%', label: 'Success Rate' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-dark-light p-4 md:p-6 rounded-lg"
              >
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;