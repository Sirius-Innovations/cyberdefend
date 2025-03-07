import { motion } from 'framer-motion';
import { HiAcademicCap, HiChip, HiShieldCheck } from 'react-icons/hi';

function Courses() {
  const courses = [
    {
      icon: <HiAcademicCap className="w-12 h-12 text-primary" />,
      level: 'Basic',
      title: 'Security Fundamentals',
      description: 'Perfect for beginners looking to understand basic security concepts and practices.',
      duration: '4 weeks',
      topics: [
        'Introduction to Cybersecurity',
        'Basic Network Security',
        'Password Management',
        'Security Best Practices'
      ],
      price: '$299'
    },
    {
      icon: <HiChip className="w-12 h-12 text-primary" />,
      level: 'Intermediate',
      title: 'Advanced Security Practices',
      description: 'For IT professionals wanting to enhance their security knowledge and skills.',
      duration: '8 weeks',
      topics: [
        'Network Security Analysis',
        'Threat Detection & Response',
        'Security Automation',
        'Incident Management'
      ],
      price: '$599'
    },
    {
      icon: <HiShieldCheck className="w-12 h-12 text-primary" />,
      level: 'Advanced',
      title: 'Security Expert Program',
      description: 'Comprehensive training for becoming a certified security professional.',
      duration: '12 weeks',
      topics: [
        'Advanced Threat Analysis',
        'Penetration Testing',
        'Security Architecture',
        'Incident Response Planning'
      ],
      price: '$999'
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
          <h1 className="text-4xl font-bold mb-4">Security Training Courses</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enhance your security knowledge and skills with our comprehensive
            training programs designed for all experience levels.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-light p-6 rounded-lg"
            >
              <div className="mb-4">{course.icon}</div>
              <span className="inline-block bg-primary text-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {course.level}
              </span>
              <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
              <p className="text-gray-400 mb-6">{course.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Course Topics:</h4>
                <ul className="space-y-2">
                  {course.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-300">
                      <span className="text-primary mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Duration: {course.duration}</span>
                <span className="text-2xl font-bold text-primary">{course.price}</span>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary-dark text-dark font-bold py-3 px-8 rounded-lg transition-colors">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;