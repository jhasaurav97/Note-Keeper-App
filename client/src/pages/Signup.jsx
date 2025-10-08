import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup Data: ", formData);
    // Later: send post request to backend (MongoDB)

  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-white dark:bg-gray-900'>
      <div className='w-full max-w-md p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg'>
        <h2 className='tex-2xl font-bold text-center text-gray-900 dark:text-white mb-6'>Create an Account</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type="text"
            name='name'
            placeholder='Full Name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white'
          />
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white' />
          <input
            type="password"
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white'
          />
          <button
            type='submit'
          className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg'>
            Sign Up
          </button>
        </form>
        <p className='text-center text-gray-500 dark:text-gray-400 mt-4'>
          Already have an account?
          <Link to="/login"
          className='text-indigo-500 hover:underline'>
           Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup;