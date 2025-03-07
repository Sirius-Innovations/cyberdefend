import { useState } from 'react';
import { motion } from 'framer-motion';
import { mockCourses } from '../../data/mockData';
import { HiPencil, HiTrash, HiPlus } from 'react-icons/hi';

function AdminCourses() {
  const [courses, setCourses] = useState(mockCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Courses</h1>
        <button
          onClick={() => {
            setSelectedCourse(null);
            setIsEditing(true);
          }}
          className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-dark font-bold py-2 px-4 rounded-lg transition-colors"
        >
          <HiPlus /> New Course
        </button>
      </div>

      <div className="grid gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-dark-light p-6 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-xl font-semibold">{course.title}</h2>
                  <span className="bg-primary text-dark text-sm font-semibold px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{course.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Duration: </span>
                    <span className="text-primary">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Price: </span>
                    <span className="text-primary">${course.price}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setIsEditing(true);
                  }}
                  className="p-2 hover:bg-dark rounded-lg transition-colors"
                >
                  <HiPencil className="text-primary" />
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
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

export default AdminCourses;