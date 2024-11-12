import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Loader } from "lucide-react";
import DataDisplay from "./components/data/DataDisplay";

// Lazy-loaded components
const Login = lazy(() => import("./components/auth/Login"));
const Signup = lazy(() => import("./components/auth/Signup"));
const MainLayout = lazy(() => import("./MainLayout"));
const HomePage = lazy(() => import("./pages/Home-Page"));
const AboutPage = lazy(() => import("./pages/About-Page"));
const ContactPage = lazy(() => import("./pages/Contact-Page"));
const FeaturePage = lazy(() => import("./pages/Feature-Page"));

const loading = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center h-screen w-screen p-96">
        <Loader className="animate-spin text-blue-600 w-96 h-96" /> <span className="my-5">Please wait...</span>
      </div>
    </>
  );
};

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={loading}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<loading />}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: "/features",
          element: (
            <Suspense fallback={<loading />}>
              <FeaturePage />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<loading />}>
              <ContactPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/data",
      element: (
        <Suspense fallback={<loading />}>
          <DataDisplay />
        </Suspense>
      ),
    },
    {
      path: "/signup",
      element: (
        <Suspense fallback={<loading />}>
          <Signup />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<loading />}>
          <Login />
        </Suspense>
      ),
    },
  ]);

  return (
    <Suspense fallback={<loading />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
}

export default App;
