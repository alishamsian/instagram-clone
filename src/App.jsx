import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./layout/Layout";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import { ToastContainer } from "react-toastify";
import PublicLayout from "./layout/PublicLayout";
import Create from "./components/create";


function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token") !== null;
  return isAuthenticated ? children : <Navigate to="/signup" replace />;
}

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route  element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="create" element={<Create/>} />  
           <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
