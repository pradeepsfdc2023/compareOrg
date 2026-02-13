// Main App component
import React from "react";
import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/components.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  // TODO: Implement routing with React Router
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
