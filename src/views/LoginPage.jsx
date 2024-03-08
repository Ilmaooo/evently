import React, { useState } from 'react';
import image from '../assets/images/register.png';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full bg-gradient-to-l from-[#BB90DB] via-white to-[#FCE8FF]">
      <div className=" bg-[#EFF4FF] pl-3.5 mt-7 mb-1 max-w-full border-l border-t border-black border-solid drop-shadow-2xl rounded-[39px] w-[1058px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be0ac2070f651587afcac33479ec45f46713fa55b75d5c33e97027444740a24?"
              className="self-stretch my-auto w-full aspect-[0.7] max-md:mt-8 py-5"
            />
          </div>
        
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
        <form onSubmit={handleSubmit} className="flex flex-col px-20 pt-8 pb-20 w-full text-base font-medium text-black bg-white rounded-[39px] max-md:px-5 max-md:mt-4 max-md:max-w-full h-full">
            <h1 className="self-center text-2xl font-bold font-Montserrat text-center items-center pt-20 mb-10">
                Sign in to your account
            </h1>
            <div className="mb-1 ">
              <label htmlFor="email" className=" max-md:max-w-full font-Montserrat">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="justify-center items-start self-end py-1 pr-16 pl-3 mt-3 max-w-full whitespace-nowrap rounded-lg bg-neutral-300 bg-opacity-80 w-[431px] max-md:pr-5" />
            </div>
            <div className="mb-1 ">
              <label htmlFor="password" className="mt-4 max-md:max-w-full font-Montserrat">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="justify-center items-start self-end py-1 pr-16 pl-3 mt-3 max-w-full whitespace-nowrap rounded-lg bg-neutral-300 bg-opacity-80 w-[431px] max-md:pr-5"/>
            </div>
            <p className="justify-center self-center mt-3 text-center px-11 font-Montserrat">Don't have an account? <span><a href="/evently/register" className='text-[#B765D3] underline font-Montserrat' 
            >Sign up</a></span></p>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;