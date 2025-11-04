import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

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

  const { login } = useAuth();

  const onGoogleSuccess = async (credentialResponse) => {
    try {
      console.log(
        "Google Credentials Received: ",
        credentialResponse.credential
      );
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/google-login`,
        { credential: credentialResponse.credential },
        { withCredentials: true }
      );

      login(res.data.data.user);
      console.log("Google Login Success: ", res.data);

      localStorage.setItem("user", JSON.stringify(res.data.data.user));

      // ✅ Store user + app token
      const { accessToken } = res.data.data;
      localStorage.setItem("token", accessToken);
      alert(`welcome ${res.data.data.user.username}`);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Login Error: ", error.response?.data || error);
      setErrors(
        error.response?.data?.message ||
          "Invalid credentials. Please try again."
      );
    }
  };

  const onGoogleError = () => {
    console.error("❌ Google Login Failed");
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccessMsg("");
    console.log("Signup Data: ", formData);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
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
      // ✅ Redirect user to login page after 1.5 seconds (optional delay)
      setTimeout(() => {
        navigate("/login");
      }, 1500);
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
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Create an Account
        </h2>
        {/* Success msg */}
        {successMsg && (
          <div className="mb-4 p-2 text-green-800 bg-green-200 rounded">
            {successMsg}
          </div>
        )}

        {/* Sucess or Error Msg */}
        {errors.length > 0 &&
          errors.map((err, index) => (
            <div
              key={index}
              className="mb-2 p-2 text-red-800 bg-red-200 rounded"
            >
              {err.message}
            </div>
          ))}

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username.toLowerCase()}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email.toLowerCase()}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Or Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-400" />
          <span className="mx-2 text-gray-500 dark:text-gray-400">or</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        {/* Google login button */}
        <div className="flex justify-center mb-3">
          <GoogleLogin onSuccess={onGoogleSuccess} onError={onGoogleError} />
        </div>


        {/* Login Link */}
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
