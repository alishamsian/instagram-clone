import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./layout/Layout";
import Search from "./components/Search";
import Create from "./components/Create";
import Profile from "./components/Profile";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import { ToastContainer } from "react-toastify";
import PublicLayout from "./layout/PublicLayout";


function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/signup" />;
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
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="create" element={<Create />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>

      <ToastContainer />
    </>
  );
}
