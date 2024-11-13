import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import MainLayout from "./MainLayout";
import HomePage from "./pages/Home-Page";
import AboutPage from "./pages/About-Page";
import ContactPage from "./pages/Contact-Page";
import FeaturePage from "./pages/Feature-Page";
import Dashboard from "./pages/Dashboard";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
