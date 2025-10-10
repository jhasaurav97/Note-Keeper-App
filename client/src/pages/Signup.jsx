import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccessMsg("");
    console.log("Signup Data: ", formData);
    // Later: send post request to backend (MongoDB)
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        formData,
        { withCredentials: true }
      );
      setSuccessMsg(res.data.message || "Signup successfully");

      setFormData({
        fullName: "",
        username: "",
        email: "",
        password: "",
      });
      console.log(res.data);
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.data.response.errors);
        console.error(error.response?.data || error.message);
      } else {
        setErrors([
          { message: error.response?.data?.message || error.message },
        ]);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="tex-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Create an Account
        </h2>
        {/* Success msg */}
        {successMsg && (
          <div className="mb-4 p-2 text-green-800 bg-green-200 rounded">
            {successMsg}
          </div>
        )}

        {/* Errors Msg */}
        {errors.length > 0 &&
          errors.map((err, index) => (
            <div
              key={index}
              className="mb-2 p-2 text-red-800 bg-red-200 rounded"
            >
              {err.message}
            </div>
          ))}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username.toLowerCase()}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email.toLowerCase()}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          Already have an account?
          <Link to="/login" className="text-indigo-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;