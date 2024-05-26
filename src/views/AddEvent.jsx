import { useState } from 'react';
import Sidebar from 'src/components/Sidebar';
import { createEvent } from '../services/ApiService';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Organizer: '',
    Location: '',
    date: '',
    time: '',
    Featured: false,
    Type: 'Concert',
    Image: null,
    EventId: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // For checkbox (boolean) fields like "Featured"
    if (type === 'checkbox') {
      setFormData((prevData) => ({ ...prevData, [name]: e.target.checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({ ...prevData, Image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formDataToSend = new FormData();
    formDataToSend.append('Name', formData.Name);
    formDataToSend.append('Organizer', formData.Organizer);
    formDataToSend.append('Location', formData.Location);
    formDataToSend.append('DateTime', `${formData.date}T${formData.time}:00.000Z`);
    formDataToSend.append('Type', formData.Type);
    formDataToSend.append('Featured', formData.Featured);
    formDataToSend.append('Image', formData.Image);
    formDataToSend.append('CreatorId', JSON.parse(localStorage.getItem('user')).id);

    try {
      console.log('Form data:', formDataToSend);
      const response = await createEvent(formDataToSend);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };



  return (
    <div className="flex justify-center items-center min-h-screen">
      <Sidebar currentView="AddEvent" />
      <div className="p-4 w-2/5 mx-auto ">
        <form id="eventForm" onSubmit={handleSubmit} className=' mx-auto px-4'>
        <div className="mt-10 col-span-full gap-x-6 gap-y-8 sm:grid-cols-6">

        <div className="sm:col-span-4">
          <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">Event name</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B684DD] sm:max-w-md">
              <input 
              type="text" 
              name="Name" 
              id="Name" 
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              value={formData.Name}
              onChange={handleChange}
              required
              />
            </div>
          </div>
        </div>
        </div>  

        <div className="mt-5 col-span-full gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="Organizer" className="block text-sm font-medium leading-6 text-gray-900">Organizer</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B684DD] sm:max-w-md">
              <input 
              type="text" 
              name="Organizer" 
              id="Organizer" 
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              value={formData.Organizer}
              onChange={handleChange}
              required
              />
            </div>
          </div>
        </div>
        </div>  

        <div className="mt-5 col-span-full gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="Location" className="block text-sm font-medium leading-6 text-gray-900">Location</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B684DD] sm:max-w-md">
              <input 
              type="text" 
              name="Location" 
              id="Location" 
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              value={formData.Location}
              onChange={handleChange}
              required
              />
            </div>
          </div>
        </div>
        </div>  

        <div className="mt-5 col-span-full gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B684DD] sm:max-w-md">
              <input 
              type="date" 
              name="date" 
              id="date" 
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              value={formData.date}
              onChange={handleChange}
              required
              />
            </div>
          </div>
        </div>
        </div>  

        <div className="mt-5 col-span-full gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">Time</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B684DD] sm:max-w-md">
              <input 
              type="time" 
              name="time" 
              id="time" 
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              value={formData.time}
              onChange={handleChange}
              required
              />
            </div>
          </div>
        </div>
        </div>  

        <div className="mt-5 col-span-full gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="Featured" className="block text-sm font-medium leading-6 text-gray-900">Featured</label>
            <div className="mt-2">
              <select
                id="Featured"
                name="Featured" 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={formData.Featured} 
                onChange={handleChange} 
              >
                <option value="true">True</option> 
                <option value="false">False</option> 
              </select>
            </div>
          </div>
        </div>


        <div className="mt-5 col-span-full gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="Type" className="block text-sm font-medium leading-6 text-gray-900">Type</label>
            <div className="mt-2">
              <select
                id="Type"
                name="Type" 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={formData.Type} 
                onChange={handleChange} 
              >
                <option value="Concert">Concert</option>
                <option value="Sports">Sports</option>
                <option value="Film">Film</option>
                <option value="Theatre">Theatre</option>
              </select>
            </div>
          </div>
        </div>


        <div className="col-span-full mt-5">
          <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-[#ba90db] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#B684DD] focus-within:ring-offset-2 hover:text-[#B684DD]">
                  <span>Upload an image</span>
                  <input 
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  className="sr-only"
                  accept='.jpg, .jpeg, .png'
                  onChange={handleImageChange}
                  required/>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, JPEG up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="col-span-full flex justify-center items-center mt-5">
        <button type="submit" className='rounded-md bg-[#ba90db] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#B684DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B684DD]'>Create Post</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
