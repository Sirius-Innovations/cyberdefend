import { motion } from 'framer-motion';

function Blog() {
  const posts = [
    {
      title: 'Top 10 Cybersecurity Threats in 2025',
      category: 'Security Tips',
      date: 'March 15, 2025',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      excerpt: 'Discover the most critical cybersecurity threats facing businesses today and how to protect against them.',
      tags: ['Cybersecurity', 'Threats', 'Protection']
    },
    {
      title: 'The Rise of AI in Security Systems',
      category: 'Industry News',
      date: 'March 10, 2025',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      excerpt: 'How artificial intelligence is revolutionizing modern security systems and threat detection.',
      tags: ['AI', 'Innovation', 'Security']
    },
    {
      title: 'Securing Remote Work Environments',
      category: 'Case Studies',
      date: 'March 5, 2025',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      excerpt: 'A comprehensive guide to implementing secure remote work policies and infrastructure.',
      tags: ['Remote Work', 'Security', 'Best Practices']
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
          <h1 className="text-4xl font-bold mb-4">Security Blog</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay informed about the latest security trends, tips, and industry insights.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-light rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-sm">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-dark px-3 py-1 rounded-full text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-primary hover:text-primary-dark transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;