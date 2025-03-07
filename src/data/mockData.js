// Mock data for the application

export const mockCourses = [
  {
    id: '1',
    title: 'Security Fundamentals',
    description: 'Perfect for beginners looking to understand basic security concepts and practices.',
    level: 'Basic',
    duration: '4 weeks',
    price: 299,
    topics: [
      'Introduction to Cybersecurity',
      'Basic Network Security',
      'Password Management',
      'Security Best Practices'
    ]
  },
  {
    id: '2',
    title: 'Advanced Security Practices',
    description: 'For IT professionals wanting to enhance their security knowledge and skills.',
    level: 'Intermediate',
    duration: '8 weeks',
    price: 599,
    topics: [
      'Network Security Analysis',
      'Threat Detection & Response',
      'Security Automation',
      'Incident Management'
    ]
  },
  {
    id: '3',
    title: 'Security Expert Program',
    description: 'Comprehensive training for becoming a certified security professional.',
    level: 'Advanced',
    duration: '12 weeks',
    price: 999,
    topics: [
      'Advanced Threat Analysis',
      'Penetration Testing',
      'Security Architecture',
      'Incident Response Planning'
    ]
  }
];

export const mockBlogPosts = [
  {
    id: '1',
    title: 'Top 10 Cybersecurity Threats in 2025',
    content: 'Detailed analysis of emerging cybersecurity threats...',
    category: 'Security Tips',
    author: 'John Smith',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    excerpt: 'Discover the most critical cybersecurity threats facing businesses today and how to protect against them.',
    tags: ['Cybersecurity', 'Threats', 'Protection']
  },
  {
    id: '2',
    title: 'The Rise of AI in Security Systems',
    content: 'How artificial intelligence is revolutionizing security...',
    category: 'Industry News',
    author: 'Sarah Johnson',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    excerpt: 'How artificial intelligence is revolutionizing modern security systems and threat detection.',
    tags: ['AI', 'Innovation', 'Security']
  },
  {
    id: '3',
    title: 'Securing Remote Work Environments',
    content: 'Best practices for securing remote work setups...',
    category: 'Case Studies',
    author: 'Michael Chen',
    date: 'March 5, 2025',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    excerpt: 'A comprehensive guide to implementing secure remote work policies and infrastructure.',
    tags: ['Remote Work', 'Security', 'Best Practices']
  }
];

export const mockInquiries = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Security Consultation',
    message: 'I would like to discuss security options for my business.',
    status: 'pending',
    date: '2025-03-15'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Course Inquiry',
    message: 'Interested in the advanced security course.',
    status: 'resolved',
    date: '2025-03-14'
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    subject: 'Partnership Opportunity',
    message: 'Would like to discuss potential partnership.',
    status: 'in-progress',
    date: '2025-03-13'
  }
];

export const mockStats = {
  totalUsers: 1234,
  blogPosts: 45,
  activeCourses: 12,
  newInquiries: 23
};