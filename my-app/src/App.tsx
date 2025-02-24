import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import "./App.css";

// import { HashRouter as Router, Route, Routes } from "react-router";
import { createHashRouter, Outlet, RouterProvider } from "react-router";
import Home from "./pages/Home";
import MechanicalGateSimulator from "./pages/MechanicalGateSimulator";
import NotFound404 from "./pages/NotFound404";
import Navbar from "./components/Navbar";
import About from "./pages/About";

const NAV_TABS = [
  { link: "/", text: "Home" },
  { link: "/about", text: "About" },
  { link: "/simulators", text: "Mechanical Simulators" },
];

const Layout = () => (
  <div>
    <Navbar items={NAV_TABS} />
    <Outlet />
  </div>
);

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <NotFound404 /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/simulators", element: <MechanicalGateSimulator /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
