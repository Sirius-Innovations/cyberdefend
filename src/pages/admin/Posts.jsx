import { useState } from 'react';
import { motion } from 'framer-motion';
import { mockBlogPosts } from '../../data/mockData';
import { HiPencil, HiTrash, HiPlus } from 'react-icons/hi';

function AdminPosts() {
  const [posts, setPosts] = useState(mockBlogPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <button
          onClick={() => {
            setSelectedPost(null);
            setIsEditing(true);
          }}
          className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-dark font-bold py-2 px-4 rounded-lg transition-colors"
        >
          <HiPlus /> New Post
        </button>
      </div>

      <div className="grid gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-dark-light p-6 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-dark px-3 py-1 rounded-full text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedPost(post);
                    setIsEditing(true);
                  }}
                  className="p-2 hover:bg-dark rounded-lg transition-colors"
                >
                  <HiPencil className="text-primary" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 hover:bg-dark rounded-lg transition-colors"
                >
                  <HiTrash className="text-red-500" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AdminPosts;