import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import FacultyModal from '../components/FacultyModal';
import { API } from '../api';

const FacultyManagement = () => {
  const [faculty, setFaculty] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch faculty data
  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/api/home/faculty`);
      
      if (response.data.success) {
        setFaculty(response.data.data);
        toast.success('Faculty data loaded successfully');
      } else {
        toast.error('Failed to fetch faculty data');
      }
    } catch (err) {
      toast.error('Error connecting to server');
      console.error('Fetch faculty error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFaculty = () => {
    setEditingFaculty(null);
    setIsModalOpen(true);
  };

  const handleEditFaculty = (facultyMember) => {
    setEditingFaculty(facultyMember);
    setIsModalOpen(true);
  };

  const handleDeleteFaculty = async (id) => {
    // Using react-hot-toast for confirmation
    toast.custom((t) => (
      <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} 
        max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg className="h-10 w-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Delete Faculty Member
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Are you sure you want to delete this faculty member? This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={async () => {
              try {
                const response = await axios.delete(`${API}/api/home/faculty/${id}`);
                
                if (response.data.success) {
                  setFaculty(faculty.filter(f => f._id !== id));
                  toast.success('Faculty member deleted successfully');
                } else {
                  toast.error('Failed to delete faculty member');
                }
              } catch (err) {
                toast.error('Error deleting faculty member');
                console.error('Delete faculty error:', err);
              }
              toast.dismiss(t.id);
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    ), {
      duration: Infinity, // Custom toast won't auto-dismiss
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingFaculty(null);
  };

  const handleSaveFaculty = async (facultyData) => {
    try {
      let response;
      
      if (editingFaculty) {
        response = await axios.put(`${API}/api/home/faculty/${editingFaculty._id}`, facultyData);
      } else {
        response = await axios.post(`${API}/api/home/faculty`, facultyData);
      }
      
      if (response.data.success) {
        if (editingFaculty) {
          setFaculty(faculty.map(f => f._id === editingFaculty._id ? response.data.data : f));
          toast.success('Faculty member updated successfully');
        } else {
          setFaculty([...faculty, response.data.data]);
          toast.success('Faculty member added successfully');
        }
        setIsModalOpen(false);
        setEditingFaculty(null);
      } else {
        toast.error(response.data.message || 'Failed to save faculty member');
      }
    } catch (err) {
      toast.error('Error saving faculty member');
      console.error('Save faculty error:', err);
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
        <h1 className="text-2xl font-bold text-gray-800">Faculty Management</h1>
        <button
          onClick={handleAddFaculty}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center transition duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Faculty
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {faculty.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No faculty members found
                </td>
              </tr>
            ) : (
              faculty.map((facultyMember) => (
                <tr key={facultyMember._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {facultyMember.image ? (
                      <img 
                        src={facultyMember.image} 
                        alt={facultyMember.name} 
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{facultyMember.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {facultyMember.subject}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{facultyMember.experience} years</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{facultyMember.qualification}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEditFaculty(facultyMember)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteFaculty(facultyMember._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <FacultyModal
          faculty={editingFaculty}
          onClose={handleModalClose}
          onSave={handleSaveFaculty}
        />
      )}
    </div>
  );
};

export default FacultyManagement;