// src/components/RegisterPage.jsx

import { useState, useContext } from "react";
import { registerUser } from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
  });

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log("User registered successfully:", response);
      login(response.user); // Store user data in context
      navigate("/evently/profile");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-l from-[#BB90DB] via-white to-[#FCE8FF] px-16 py-20 max-md:max-w-full max-md:px-5">
      <div className=" mb-1 mt-7 w-[1058px] max-w-full rounded-[39px] border-l border-t border-solid border-black bg-[#EFF4FF] pl-3.5 drop-shadow-2xl">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-2/5 flex-col max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be0ac2070f651587afcac33479ec45f46713fa55b75d5c33e97027444740a24?"
              className="my-auto aspect-[0.7] w-full self-stretch max-md:mt-8"
            />
          </div>
          <div className="ml-5 flex w-3/5 flex-col max-md:ml-0 max-md:w-full">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col rounded-[39px] bg-white px-20 pb-20 pt-8 text-base font-medium text-black max-md:mt-4 max-md:max-w-full max-md:px-5"
            >
              <h1 className="mb-10 mt-5 self-center text-center font-Montserrat text-2xl font-bold">
                Create an account
              </h1>
              <div className="mb-1 ">
                <label
                  htmlFor="username"
                  className="mt-20 self-end text-center font-Montserrat max-md:mt-10 max-md:max-w-full"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-3 w-[431px] max-w-full items-start justify-center self-end whitespace-nowrap rounded-lg bg-[#D1D1D1] bg-opacity-80 py-1 pl-5 pr-16 text-center max-md:pr-5"
                />
              </div>
              <div className="mb-1 ">
                <label htmlFor="email" className=" font-Montserrat max-md:max-w-full">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 w-[431px] max-w-full items-start justify-center self-end whitespace-nowrap rounded-lg bg-neutral-300 bg-opacity-80 py-1 pl-3 pr-16 max-md:pr-5"
                />
              </div>
              <div className="mb-1 ">
                <label
                  htmlFor="password"
                  className="mt-4 font-Montserrat max-md:max-w-full"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-3 w-[431px] max-w-full items-start justify-center self-end whitespace-nowrap rounded-lg bg-neutral-300 bg-opacity-80 py-1 pl-3 pr-16 max-md:pr-5"
                />
              </div>
              <div className="mb-1 ">
                <label
                  htmlFor="location"
                  className="mt-4 font-Montserrat max-md:max-w-full"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-3 w-[431px] max-w-full items-start justify-center self-end whitespace-nowrap rounded-lg bg-neutral-300 bg-opacity-80 py-1 pl-3 pr-16 max-md:pr-5"
                />
              </div>
              <div className="mb-4 mt-auto flex justify-center ">
                <button type="submit">Create account</button>
              </div>
              <p className="mt-3 justify-center self-center px-11 text-center font-Montserrat">
                Already have an account?{" "}
                <span>
                  <a
                    href="/evently/login"
                    className="font-Montserrat text-[#B765D3] underline"
                  >
                    Log in
                  </a>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
