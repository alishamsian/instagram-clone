import { Route, Routes } from "react-router";
import Home from "./components/Home";

import Layout from "./layout/Layout";
import Search from "./components/search";
import Create from "./components/create";
import Profile from "./components/profile";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="create" element={<Create/>}/>
      <Route path="profile" element={<Profile/>}/>
      </Route>
    </Routes>




  );
}

export default App;
