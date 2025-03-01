import { Route, Routes } from "react-router";
import Home from "./components/Home";

import Layout from "./layout/Layout";
import Search from "./components/search";
import Create from "./components/create";
import Profile from "./components/profile";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="create" element={<Create/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>




  );
}

export default App;
