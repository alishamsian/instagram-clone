import { Home, Search, PlusSquare, User } from "lucide-react";
import Logo from "../../assets/logo.png";
import LoginImg from "../../assets/login-img.png";
import NavItem from "../NavItem/NavItem";


export default function Sidebar() {
  return (
    <div className="h-screen w-60 bg-white border-r flex flex-col p-5 fixed text-black">
      <div className="flex w-1/2 mb-5">
        <img
          src={Logo}
          alt="iPhone with Instagram"
        />
      </div>
      <nav className="flex flex-col space-y-6">
        
        <NavItem icon={Home} label="Home" active to={"/"}/>
        <NavItem icon={Search} label="Search" to={"/Search"} />
        <NavItem icon={PlusSquare} label="Create" to={"/Create"} />
        <NavItem icon={User} label="Profile" avatar={LoginImg} to={"/Profile"} />
      </nav>
    </div>
  );
}

