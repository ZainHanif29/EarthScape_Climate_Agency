import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const PublicRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/auth/getuser", {
          withCredentials: true,
        });
        setIsLoggedIn(response.data.success);
      } catch {
        setIsLoggedIn(false);
      }
    };

    checkUser();
  }, []);

  if (isLoggedIn === null) return <div>Loading...</div>;
  if (isLoggedIn) return <Navigate to="/" replace />;
  return children;
};

