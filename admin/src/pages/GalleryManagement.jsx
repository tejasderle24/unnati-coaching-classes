import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import GalleryModal from '../components/GalleryModal';
import { API } from '../api';

const GalleryManagement = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Fetch gallery data
  useEffect(() => {
    fetchGalleries();
  }, []);

  const fetchGalleries = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/api/home/gallery`);
      
      if (response.data.success) {
        setGalleries(response.data.data);
        toast.success('Gallery entries loaded successfully');
      } else {
        toast.error('Failed to fetch gallery entries');
      }
    } catch (err) {
      toast.error('Error connecting to server');
      console.error('Fetch galleries error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddGallery = () => {
    setSelectedGallery(null);
    setIsModalOpen(true);
  };

  const handleEditGallery = (gallery) => {
    setSelectedGallery(gallery);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (gallery) => {
    setSelectedGallery(gallery);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteGallery = async () => {
    if (!selectedGallery) return;
    
    try {
      const response = await axios.delete(`${API}/api/home/gallery/${selectedGallery._id}`);
      
      if (response.data.success) {
        setGalleries(galleries.filter(g => g._id !== selectedGallery._id));
        toast.success('Gallery entry deleted successfully');
        setIsDeleteModalOpen(false);
        setSelectedGallery(null);
      } else {
        toast.error('Failed to delete gallery entry');
      }
    } catch (err) {
      toast.error('Error deleting gallery entry');
      console.error('Delete gallery error:', err);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedGallery(null);
  };

  const handleSaveGallery = async (galleryData) => {
    try {
      let response;
      
      if (selectedGallery) {
        response = await axios.put(`${API}/api/home/gallery/${selectedGallery._id}`, galleryData);
      } else {
        response = await axios.post(`${API}/api/home/gallery`, galleryData);
      }
      
      if (response.data.success) {
        if (selectedGallery) {
          setGalleries(galleries.map(g => g._id === selectedGallery._id ? response.data.data : g));
          toast.success('Gallery entry updated successfully');
        } else {
          setGalleries([...galleries, response.data.data]);
          toast.success('Gallery entry added successfully');
        }
        setIsModalOpen(false);
        setSelectedGallery(null);
      } else {
        toast.error(response.data.message || 'Failed to save gallery entry');
      }
    } catch (err) {
      toast.error('Error saving gallery entry');
      console.error('Save gallery error:', err);
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'events': return 'bg-blue-100 text-blue-800';
      case 'seminars': return 'bg-green-100 text-green-800';
      case 'awards': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredGalleries = categoryFilter === 'all' 
    ? galleries 
    : galleries.filter(g => g.category === categoryFilter);

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
        <h1 className="text-2xl font-bold text-gray-800">Gallery Management</h1>
        <div className="flex space-x-2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          >
            <option value="all">All Categories</option>
            <option value="events">Events</option>
            <option value="seminars">Seminars</option>
            <option value="awards">Awards</option>
          </select>
          <div className="flex bg-gray-100 rounded-md p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
          <button
            onClick={fetchGalleries}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md flex items-center transition duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
          <button
            onClick={handleAddGallery}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center transition duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Entry
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGalleries.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No gallery entries</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by creating a new gallery entry.</p>
              <div className="mt-6">
                <button
                  onClick={handleAddGallery}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Entry
                </button>
              </div>
            </div>
          ) : (
            filteredGalleries.map((gallery) => (
              <div key={gallery._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                {gallery.images && gallery.images.length > 0 && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={gallery.images[0]} 
                      alt={gallery.title} 
                      className="w-full h-full object-cover"
                    />
                    {gallery.images.length > 1 && (
                      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        +{gallery.images.length - 1} more
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{gallery.title}</h3>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getCategoryColor(gallery.category)}`}>
                      {gallery.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{gallery.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{formatDate(gallery.date)}</span>
                    <span className="text-sm text-gray-500">{gallery.images?.length || 0} images</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditGallery(gallery)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(gallery)}
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
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Images</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredGalleries.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                    No gallery entries found
                  </td>
                </tr>
              ) : (
                filteredGalleries.map((gallery) => (
                  <tr key={gallery._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {gallery.images && gallery.images.length > 0 ? (
                        <img 
                          src={gallery.images[0]} 
                          alt={gallery.title} 
                          className="h-10 w-10 object-cover rounded"
                        />
                      ) : (
                        <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center">
                          <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{gallery.title}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">{gallery.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getCategoryColor(gallery.category)}`}>
                        {gallery.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{formatDate(gallery.date)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{gallery.images?.length || 0}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEditGallery(gallery)}
                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(gallery)}
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
      )}

      {/* Gallery Modal */}
      {isModalOpen && (
        <GalleryModal
          gallery={selectedGallery}
          onClose={handleModalClose}
          onSave={handleSaveGallery}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && selectedGallery && (
        <div className="fixed inset-0 bg-gray-600/50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-auto p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-red-100 rounded-full p-2">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Delete Gallery Entry</h3>
                <p className="text-sm text-gray-500">Are you sure you want to delete "{selectedGallery.title}"? This action cannot be undone.</p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={handleDeleteGallery}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setSelectedGallery(null);
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

export default GalleryManagement;