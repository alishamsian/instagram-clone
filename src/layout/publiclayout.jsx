import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Outlet />
    </div>
  );
}
