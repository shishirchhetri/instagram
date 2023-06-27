import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import PostCard from "./components/utils/PostCard";
import Messages from "./pages/Messages";
// import Nav from "./components/Nav";
const App = () => {
  return (
    <div className="app flex">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
