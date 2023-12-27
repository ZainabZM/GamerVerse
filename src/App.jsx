import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PlayStation from "./components/saloon/Playstation";
import Home from "./components/home/Home";
import Xbox from "./components/saloon/Xbox";
import Switch from "./components/saloon/Switch";
import Computer from "./components/saloon/Computer";
import Login from "./components/Login/Login";
import ProfilPage from "./components/Profile/Profil";
import Register from "./components/Register/Register";
import Terms from "./components/Register/Terms";
import Footer from "./components/layouts/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/PlayStation",
      element: <PlayStation />,
    },
    {
      path: "/Xbox",
      element: <Xbox />,
    },
    {
      path: "/Switch",
      element: <Switch />,
    },
    {
      path: "/Computer",
      element: <Computer />,
    },
    {
      path: "/ProfilPage",
      element: <ProfilPage />,
    },

    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Terms",
      element: <Terms />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
