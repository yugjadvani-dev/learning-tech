import { Route, Routes, useLocation } from "react-router-dom";
// import React from 'react'
import { AddMovie } from './pages/add-movie';
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import { TheaterOwner } from "./pages/theater-owner";
import { UserManagement } from "./pages/user-management";
import { Dashboard } from "./pages/dashboard";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Routes>
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/" element={< Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/theater-owner" element={<TheaterOwner />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </>
  );
};

export default App;
