import React, { useEffect, useState, useRef } from 'react';

const CourseModal = ({ course, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [batchSize, setBatchSize] = useState('');
  const [price, setPrice] = useState('');
  const [features, setFeatures] = useState('');
  const [image, setImage] = useState('');
  const [popular, setPopular] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (course) {
      setTitle(course.title || '');
      setDescription(course.description || '');
      setDuration(course.duration || '');
      setBatchSize(course.batchSize?.toString() || '');
      setPrice(course.price?.toString() || '');
      setFeatures(course.features?.join(', ') || '');
      setImage(course.image || '');
      setPopular(course.popular || false);
      
      // If course has an image, set it as uploaded image
      if (course.image) {
        setUploadedImage({
          name: 'Course Image',
          url: course.image
        });
      }
    }
  }, [course]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulate file upload process (replace with actual API call)
    try {
      // In a real application, you would upload to your server here
      // This is just a simulation that creates a local URL
      const reader = new FileReader();
      reader.onload = (e) => {
        // For demo purposes, we're using the local file URL
        // In production, you would get a URL from your server
        const uploadedFile = {
          name: file.name,
          url: e.target.result,
          // In a real app, you would have a permanent URL from your server
          // url: `https://your-server.com/uploads/${file.name}`
        };
        
        setUploadedImage(uploadedFile);
        setImage(e.target.result); // Set the image URL for saving
        
        setIsUploading(false);
        
        // Reset the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
      setIsUploading(false);
    }
  };

  const removeUploadedImage = () => {
    setUploadedImage(null);
    setImage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSave({
        title: title.trim(),
        description: description.trim(),
        duration: duration.trim(),
        batchSize: parseInt(batchSize),
        price: parseFloat(price),
        features: features.split(',').map(f => f.trim()).filter(f => f),
        image: image.trim(),
        popular
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600/50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-auto p-6">
        <div className="flex justify-between items-center pb-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">
            {course ? 'Edit Course' : 'Add New Course'}
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

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-h-96 overflow-y-auto pr-2">
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
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Duration *
              </label>
              <input
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                placeholder="e.g., 6 months"
                required
                disabled={isSubmitting}
              />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="batchSize" className="block text-sm font-medium text-gray-700">
                Batch Size *
              </label>
              <input
                type="number"
                id="batchSize"
                min="1"
                value={batchSize}
                onChange={(e) => setBatchSize(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price ($) *
              </label>
              <input
                type="number"
                id="price"
                min="0"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="features" className="block text-sm font-medium text-gray-700">
              Features (comma separated) *
            </label>
            <textarea
              id="features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              rows={2}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="e.g., Live Classes, Recorded Sessions, Certificate"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Image
            </label>
            
            {uploadedImage ? (
              <div className="mt-2">
                <div className="relative inline-block">
                  <img
                    src={uploadedImage.url}
                    alt={uploadedImage.name}
                    className="w-32 h-32 object-cover rounded-md border"
                  />
                  <button
                    type="button"
                    onClick={removeUploadedImage}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
                    title="Remove image"
                    disabled={isSubmitting}
                  >
                    &times;
                  </button>
                </div>
                <p className="mt-1 text-sm text-gray-500">{uploadedImage.name}</p>
              </div>
            ) : (
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
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 10MB)</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                    ref={fileInputRef}
                    disabled={isSubmitting || isUploading}
                  />
                </label>
              </div>
            )}
            
            {isUploading && (
              <div className="mt-2 text-sm text-blue-600">Uploading image...</div>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="popular"
              checked={popular}
              onChange={(e) => setPopular(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              disabled={isSubmitting}
            />
            <label htmlFor="popular" className="ml-2 block text-sm text-gray-900">
              Mark as popular course
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
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
              {isSubmitting ? 'Saving...' : (course ? 'Update' : 'Create')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;