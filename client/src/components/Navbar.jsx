import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { user, logout } = useAuth();

  const navLinks = user
    ? [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
        { name: "Signup", path: "/signup" },
      ];

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Generate a random avatar URL using DiceBear (unique per user email or username)
  const getAvatarUrl = () => {
    if (!user) return "";
    const seed =
      user.email || user.username || Math.random().toString(36).substring(2, 8);
    return `https://avatars.dicebear.com/api/identicon/${seed}.svg`;
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl px-6 py-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Note Keeper
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 
              dark:hover:text-indigo-400 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Show profile + logout if user */}
          {user && (
            <div className="flex items-center gap-3">
              <img
                src={getAvatarUrl()}
                alt="User"
                className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600"
              />
              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300 cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}

          {/* Dark model toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 cursor-pointer"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-gray-700 dark:text-gray-200 hover:bg-indigo-500 dark:hover:bg-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Show logout in mobile aslo */}
          {user && (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="block px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
            >
              Logout
            </button>
          )}
          {/* Dark mode */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
