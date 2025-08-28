import React, { useEffect, useState, useRef } from 'react';

const GalleryModal = ({ gallery, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('events');
  const [images, setImages] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (gallery) {
      setTitle(gallery.title || '');
      setDescription(gallery.description || '');
      setCategory(gallery.category || 'events');
      setImages(gallery.images?.join('\n') || '');
      setDate(gallery.date ? new Date(gallery.date).toISOString().split('T')[0] : '');
    } else {
      // Set default date to today for new entries
      setDate(new Date().toISOString().split('T')[0]);
    }
  }, [gallery]);

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;
    
    setIsUploading(true);
    
    // Simulate file upload process (replace with actual API call)
    try {
      const uploadPromises = files.map(file => {
        return new Promise((resolve) => {
          // In a real application, you would upload to your server here
          // This is just a simulation that creates a local URL
          const reader = new FileReader();
          reader.onload = (e) => {
            // For demo purposes, we're using the local file URL
            // In production, you would get a URL from your server
            resolve({
              name: file.name,
              url: e.target.result,
              // In a real app, you would have a permanent URL from your server
              // url: `https://your-server.com/uploads/${file.name}`
            });
          };
          reader.readAsDataURL(file);
        });
      });
      
      const newImages = await Promise.all(uploadPromises);
      setUploadedImages([...uploadedImages, ...newImages]);
      
      // Add uploaded image URLs to the images textarea
      const newImageUrls = newImages.map(img => img.url).join('\n');
      setImages(prev => prev ? `${prev}\n${newImageUrls}` : newImageUrls);
      
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Failed to upload images. Please try again.');
    } finally {
      setIsUploading(false);
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removeUploadedImage = (index) => {
    const newUploadedImages = [...uploadedImages];
    newUploadedImages.splice(index, 1);
    setUploadedImages(newUploadedImages);
    
    // Also remove from the images textarea
    const imageUrls = images.split('\n').filter(url => url.trim() !== '');
    imageUrls.splice(index, 1);
    setImages(imageUrls.join('\n'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSave({
        title: title.trim(),
        description: description.trim(),
        category,
        images: images.split('\n').map(img => img.trim()).filter(img => img),
        date: date ? new Date(date) : new Date()
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600/50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-auto p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center pb-4 border-b sticky top-0 bg-white z-10">
          <h3 className="text-xl font-semibold text-gray-900">
            {gallery ? 'Edit Gallery Entry' : 'Add New Gallery Entry'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-150"
            disabled={isSubmitting}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category *
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                required
                disabled={isSubmitting}
              >
                <option value="events">Events</option>
                <option value="seminars">Seminars</option>
                <option value="awards">Awards</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description *
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date *
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Images
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 10MB each)</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                  ref={fileInputRef}
                  disabled={isSubmitting || isUploading}
                />
              </label>
            </div>
            
            {isUploading && (
              <div className="mt-2 text-sm text-blue-600">Uploading images...</div>
            )}
            
            {uploadedImages.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Images:</h4>
                <div className="grid grid-cols-3 gap-2">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-20 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeUploadedImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove image"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">
              Image URLs (one per line) *
            </label>
            <textarea
              id="images"
              value={images}
              onChange={(e) => setImages(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
              required
              disabled={isSubmitting}
            />
            <p className="mt-1 text-sm text-gray-500">Enter one image URL per line or upload images above</p>
          </div>

          <div className="flex justify-end space-x-3 pt-4 sticky bottom-0 bg-white py-2 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition duration-200"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-200 disabled:opacity-50"
              disabled={isSubmitting || isUploading}
            >
              {isSubmitting ? 'Saving...' : (gallery ? 'Update' : 'Create')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GalleryModal;