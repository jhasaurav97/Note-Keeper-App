import heroBg from "../assets/hero-bg.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Hero = () => {
  const { user } = useAuth();

  return (
    <div className="relative pt-20 bg-white dark:bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-6 pb-4 md:pb-0 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Organize Your Ideas <br className="hidden md:block" /> with Note
            Keeper
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Your personal online notebook to create, edit, and delete notes in
            one place. Keep everything safe, synced, and accessible anytime —
            start today by signing up for free.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-medium text-lg shadow-lg hover:bg-indigo-700 transition cursor-pointer">
              <Link to={user ? "/dashboard" : "/login"}>Get Started – It’s Free</Link>
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroBg}
            alt="Note Keeper Illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-[250px] md:h-[350px] lg:h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
