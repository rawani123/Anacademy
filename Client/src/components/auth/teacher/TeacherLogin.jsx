import React, { useState } from 'react';
import Navbar from '../../navbar/NavBar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TeacherLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  // const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/teacher/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      

      if (response.ok) {
        // setMessage(' Please verify your email. Check your inbox.');/
        alert("login successfully");
        console.log(data?.token)
        localStorage.setItem('token', data?.token) 
        navigate('/')
        // You can redirect the user to a verification page or show a success message here
      } else {
        // setMessage(data.message);
        alert("login failed")
      }
    } catch (error) {
      console.error('Error:', error);
      // setMessage('An error occurred. Please try again later.');
      alert("An error occurred. Please try again later.")
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-[665px] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#60B3D1]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login to your Teacher Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          {/* {message && <p className="mt-4 text-center text-sm text-white">{message}</p>} */}
          <p className="mt-10 text-center text-sm text-white">
            Don't have account ?{' '}
            <Link to="/signup-as" className="font-semibold leading-6 text-blue-800 hover:text-blue-600">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default TeacherLogin;
