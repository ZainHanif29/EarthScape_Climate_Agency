import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
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
  
    if (isLoggedIn === null) return <div>Loading...</div>; // Jab tak state set na ho, loading dikhao
    if (!isLoggedIn) return <Navigate to="/login" replace />; // Agar user login nahi hai, to /login bhejo
    return children; // Agar logged in hai, to children render karo
  };
  