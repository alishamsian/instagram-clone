import Sidebar from "../components/SideBar/SideBar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet /> {/* محتوای هر صفحه در اینجا رندر می‌شود */}
      </div>
    </div>
  );
}