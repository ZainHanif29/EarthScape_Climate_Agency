import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import "./App.css";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import MainLayout from "./MainLayout";
import HomePage from "./pages/Home-Page";
import AboutPage from "./pages/About-Page";
import FeaturePage from "./pages/Feature-Page";
import ContactPage from "./pages/Contact-Page";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { PublicRoute } from "./routes/PublicRoute";
import TableauDashboard from "./pages/Dashboard";

// Directly Imported Components


function App() {
  // Define app routes
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/features",
          element: <FeaturePage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/dashboard",
          element: <TableauDashboard />,
        },
      ],
    },
    {
      path: "/signup",
      element: (
        <PublicRoute>
          <Signup />
        </PublicRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
