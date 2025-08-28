import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const FacultyModal = ({ faculty, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Math');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [image, setImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (faculty) {
      setName(faculty.name || '');
      setSubject(faculty.subject || 'Math');
      setExperience(faculty.experience?.toString() || '');
      setQualification(faculty.qualification || '');
      setImage(faculty.image || '');
    }
  }, [faculty]);

  const validateForm = () => {
    if (!name.trim()) {
      toast.error('Name is required');
      return false;
    }
    
    if (!experience || isNaN(experience) || parseInt(experience) < 0) {
      toast.error('Experience must be a positive number');
      return false;
    }
    
    if (!qualification.trim()) {
      toast.error('Qualification is required');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await onSave({
        name: name.trim(),
        subject,
        experience: parseInt(experience),
        qualification: qualification.trim(),
        image: image.trim()
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600/50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-auto p-6">
        <div className="flex justify-between items-center pb-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">
            {faculty ? 'Edit Faculty' : 'Add New Faculty'}
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

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject *
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              disabled={isSubmitting}
            >
              <option value="Math">Math</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
            </select>
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Experience (years) *
            </label>
            <input
              type="number"
              id="experience"
              min="0"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">
              Qualification *
            </label>
            <input
              type="text"
              id="qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="https://example.com/image.jpg"
              disabled={isSubmitting}
            />
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
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : (faculty ? 'Update' : 'Create')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FacultyModal;