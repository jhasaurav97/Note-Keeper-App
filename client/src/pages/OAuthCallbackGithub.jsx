import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const OAuthCallbackGithub = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loadingMsg, setLoadingMsg] = useState(
    "Logging you in with GitHub... please wait."
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (!code) {
      console.error("GitHub OAuth callback error: No code found in URL");
      navigate("/login");
      return;
    }

    // Immediately invoke async function
    (async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/github`, // ✅ Correct backend route
          { code },
          { withCredentials: true }
        );

        if (res.data?.data?.accessToken) {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          setLoadingMsg("Login successful! Redirecting...");
          setTimeout(() => navigate("/dashboard"), 1000);
        } else {
          console.error(
            "GitHub OAuth callback error: Access token missing",
            res.data
          );
          navigate("/login");
        }
      } catch (error) {
        console.error(
          "GitHub login failed:",
          error.response?.data || error.message || error
        );
        setLoadingMsg("GitHub login failed. Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      }
    })();
  }, [location, navigate]);

  return <p>{loadingMsg}</p>;
};

export default OAuthCallbackGithub;
