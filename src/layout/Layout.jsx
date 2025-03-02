import Sidebar from "../components/SideBar/SideBar";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-60 w-full p-5"></main>
    </div>
  );
}
