import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API } from '../api';
import CourseModal from '../components/CourseModal';

const CoursesManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Fetch courses data
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/api/home/courses`);
      
      if (response.data.success) {
        setCourses(response.data.data);
        toast.success('Courses loaded successfully');
      } else {
        toast.error('Failed to fetch courses');
      }
    } catch (err) {
      toast.error('Error connecting to server');
      console.error('Fetch courses error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCourse = () => {
    setSelectedCourse(null);
    setIsModalOpen(true);
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (course) => {
    setSelectedCourse(course);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCourse = async () => {
    if (!selectedCourse) return;
    
    try {
      const response = await axios.delete(`${API}/api/home/courses/${selectedCourse._id}`);
      
      if (response.data.success) {
        setCourses(courses.filter(c => c._id !== selectedCourse._id));
        toast.success('Course deleted successfully');
        setIsDeleteModalOpen(false);
        setSelectedCourse(null);
      } else {
        toast.error('Failed to delete course');
      }
    } catch (err) {
      toast.error('Error deleting course');
      console.error('Delete course error:', err);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const handleSaveCourse = async (courseData) => {
    try {
      let response;
      
      if (selectedCourse) {
        response = await axios.put(`${API}/api/home/courses/${selectedCourse._id}`, courseData);
      } else {
        response = await axios.post(`${API}/api/home/courses`, courseData);
      }
      
      if (response.data.success) {
        if (selectedCourse) {
          setCourses(courses.map(c => c._id === selectedCourse._id ? response.data.data : c));
          toast.success('Course updated successfully');
        } else {
          setCourses([...courses, response.data.data]);
          toast.success('Course added successfully');
        }
        setIsModalOpen(false);
        setSelectedCourse(null);
      } else {
        toast.error(response.data.message || 'Failed to save course');
      }
    } catch (err) {
      toast.error('Error saving course');
      console.error('Save course error:', err);
    }
  };

  const togglePopularStatus = async (courseId, currentStatus) => {
    try {
      const response = await axios.put(`${API}/api/home/courses/${courseId}`, { 
        popular: !currentStatus 
      });
      
      if (response.data.success) {
        setCourses(courses.map(c => c._id === courseId ? response.data.data : c));
        toast.success(`Course ${!currentStatus ? 'marked as popular' : 'removed from popular'}`);
      } else {
        toast.error('Failed to update course status');
      }
    } catch (err) {
      toast.error('Error updating course status');
      console.error('Update status error:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Courses Management</h1>
        <button
          onClick={handleAddCourse}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center transition duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v8" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No courses</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new course.</p>
            <div className="mt-6">
              <button
                onClick={handleAddCourse}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Course
              </button>
            </div>
          </div>
        ) : (
          courses.map((course) => (
            <div key={course._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {course.image && (
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  <button
                    onClick={() => togglePopularStatus(course._id, course.popular)}
                    className={`p-1 rounded-full ${course.popular ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'}`}
                    title={course.popular ? 'Remove from popular' : 'Mark as popular'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Duration</span>
                    <p className="text-sm text-gray-900">{course.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Batch Size</span>
                    <p className="text-sm text-gray-900">{course.batchSize} students</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Price</span>
                  <p className="text-2xl font-bold text-blue-600">${course.price}</p>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Features</span>
                  <ul className="mt-1 space-y-1">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                    {course.features.length > 3 && (
                      <li className="text-sm text-gray-500">+{course.features.length - 3} more</li>
                    )}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditCourse(course)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(course)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Course Modal */}
      {isModalOpen && (
        <CourseModal
          course={selectedCourse}
          onClose={handleModalClose}
          onSave={handleSaveCourse}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-gray-600/50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-auto p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-red-100 rounded-full p-2">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Delete Course</h3>
                <p className="text-sm text-gray-500">Are you sure you want to delete this course? This action cannot be undone.</p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={handleDeleteCourse}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setSelectedCourse(null);
                }}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default CoursesManagement;