import { Route, Routes, Navigate } from "react-router";

import { ToastContainer } from "react-toastify";
import PublicLayout from "./layout/PublicLayout";
import Signup from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import Layout from "./layout/Layout";
import Search from "./components/search";
import Create from "./components/create";
import Profile from "./components/profile";
import Home from "./components/Home";

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

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
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
