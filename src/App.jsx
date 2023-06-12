import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Layout from './pages/Layout'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import PostCard from "./components/utils/PostCard";
import Messages from "./components/Messages";
// import Nav from "./components/Nav";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
