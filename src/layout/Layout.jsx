import { Outlet } from "react-router";
import Sidebar from "../components/SideBar/SideBar";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 ml-60">
      <Outlet/>
      </div>
    </div>
  );
}
