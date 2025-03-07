import { motion } from 'framer-motion';

function About() {
  const team = [
    {
      name: 'Alice blue',
      role: 'CEO & Founder',
      image: 'https://pplx-res.cloudinary.com/image/upload/v1724992542/ai_generated_images/weigenxgckxweaoy48tm.png',
    },
    {
      name: 'Bob red',
      role: 'Head of Cybersecurity',
      image: 'https://pict.ai/images/secure/xG5Vbm/YSt1k4v3qNuzutQ_1704255526.png',
    },
    {
      name: 'charles yellow',
      role: 'Lead Security Consultant',
      image: 'https://cdn.goenhance.ai/user/2024/07/12/0a2640eb-1120-42e1-8478-eb2a5c19367b_0.jpg',
    }
  ];

  const milestones = [
    { year: '2025', event: 'Company Founded' },
    { year: '2025', event: 'Expanded to Cyber Security Services' },
    
  ];

  return (
    <div className="pt-20 pb-16">
      <div className=" mx-32 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leading the way in security solutions with a commitment to excellence
            and innovation in protecting businesses worldwide.
          </p>
        </motion.div>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-dark-light rounded-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[500px] object-top object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="text-primary font-bold text-xl w-20">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-dark-light p-4 rounded-lg">
                  {milestone.event}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;