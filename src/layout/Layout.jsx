import Sidebar from "../components/SideBar/SideBar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-60 w-full p-5">{children}</main>
    </div>
  );
}
