import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const onGoogleSuccess = async (credentialResponse) => {
    try {
      console.log("Google Credentials Received: ", credentialResponse.credential);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/google-login`,
        { credential: credentialResponse.credential },
        { withCredentials: true }
      );

      login(res.data.data.user);
      console.log("Google Login Success: ", res.data);
      
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      
      // Store user + app token
      const { accessToken } = res.data.data;
      localStorage.setItem("token", accessToken);
      alert(`welcome ${res.data.data.user.username}`);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Login Error: ", error.response?.data || error);
      setErrorMsg(
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
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    console.log("Login Data: ", formData);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData,
        { withCredentials: true }
      );
      if (res.data?.success) {
        setSuccessMsg("Login successful! Redirecting...");
        console.log("User logged In: ", res.data);

        // store token in localStorage if you want persistent login
        localStorage.setItem("accessToken", res.data.data.accessToken);

        //Update global auth state
        login(res.data.data.user);
        setTimeout(() => navigate("/dashboard"), 2000);
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      setErrorMsg(
        error.response?.data?.message ||
          "Invalid credentials. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="tex-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Login to Your Account
        </h2>

        {/* Sucess or Error Msg */}
        {errorMsg && (
          <p className="text-red-500 text-center mb-2 font-medium">
            {errorMsg}
          </p>
        )}
        {successMsg && (
          <p className="text-green-500 text-center mb-2 font-medium">
            {successMsg}
          </p>
        )}

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
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
            Login
          </button>
        </form>

        {/* Or Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-400" />
          <span className="mx-2 text-gray-500 dark:text-gray-400">or</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        {/* Google login button */}
        <div className="flex justify-center mb-3 ">
          <GoogleLogin onSuccess={onGoogleSuccess} onError={onGoogleError} />
        </div>

        {/* Sign-up Link */}
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          Don’t have an account?
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
